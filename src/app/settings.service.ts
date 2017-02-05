import { Injectable } from '@angular/core'
import { TranslateService } from 'ng2-translate';

function prettyDuration (seconds) {
  if (seconds < 60) { return `${seconds.toFixed(0)} seconds` }
  const minutes = seconds / 60
  if (minutes < 60) { return `${minutes.toFixed(0)} minutes` }
  const hours = minutes / 60
  if (hours < 24) { return `${hours.toFixed(0)} hours` }
  const days = hours / 24
  return `${days.toFixed(0)} days`
}

@Injectable()
export class SettingsService {
  public locales: string
  public mode: string
  public _locale: string
  public taxesPercentage: number
  public startTime: number
  public updateRate: number
  public moneyPrefix: string
  public moneySuffix: string
  public secondlyRate: number
  public timeSpent: string
  public moneySpent: number
  public moneyAfterTaxes: number
  public moneySpentPretty: string
  public moneyAfterTaxesPretty: string
  private _salaryPeriod: string
  private _secondsPassed: number
  private _salary: number
  private _hoursPerMonth: number
  private _currency: string

  constructor(private translateService: TranslateService) {
    this.mode = 'simple'
    this.startTime = this.getCurrentTime()
    this.currency = 'SEK'
    this.salary = 25000
    this.hoursPerMonth = 168
    this.updateRate = 20
    this.taxesPercentage = 25
    this.salaryPeriod = 'monthly'
    this.locale = 'sv-se'
  }

  getCurrentTime() {
    return Number(new Date())
  }
  updateStartTime () {
    this.startTime = this.getCurrentTime()
  }
  getDefaultSalaryPeriod () {
    switch (this.currency) {
      case 'USD': return 'annually'
      default: return 'monthly'
    }
  }
  get locale (): string {
    return this._locale
  }
  set locale (locale) {
    this._locale = locale
    this.translateService.use(locale)
  }
  get currency (): string {
    return this._currency
  }
  set currency (currency) {
    this._currency = currency
    this.moneyPrefix = this.getMoneyPrefix()
    this.moneySuffix = this.getMoneySuffix()
    this.salaryPeriod = this.getDefaultSalaryPeriod()
  }
  get salary (): number {
    return this._salary
  }
  set salary (salary) {
    this._salary = salary
    this.secondlyRate = this.getSecondlyRate()
  }
  get hoursPerMonth (): number {
    return this._hoursPerMonth
  }
  set hoursPerMonth (hoursPerMonth) {
    this._hoursPerMonth = hoursPerMonth
    this.secondlyRate = this.getSecondlyRate()
  }
  get secondsPassed (): number {
    return this._secondsPassed
  }
  set secondsPassed (secondsPassed) {
    this._secondsPassed = secondsPassed
    this.timeSpent = prettyDuration(secondsPassed)
  }
  get salaryPeriod (): string {
    return this._salaryPeriod
  }
  set salaryPeriod (salaryPeriod) {
    this._salaryPeriod = salaryPeriod
    this.secondlyRate = this.getSecondlyRate()
  }
  getSecondlyRate (): number {
    switch (this.salaryPeriod) {
      case 'monthly':
        return this.salary / this.hoursPerMonth / 3600
      case 'annually':
        return this.salary / this.hoursPerMonth / 3600 / 12
      default:
        throw new Error(`Unexpected salary period ${this.salaryPeriod}`)
    }
  }
  getMoneyPrefix(): string {
    switch (this.currency) {
      case 'USD': return '$'
      default: return ''
    }
  }
  getMoneySuffix(): string {
    switch (this.currency) {
      case 'USD': return ''
      default: return ` ${this.currency}`
    }
  }
  getPrettyMoney(money) {
    return `${this.moneyPrefix}${money.toFixed(2)}${this.moneySuffix}`
  }
  update () {
    this.secondsPassed = (this.getCurrentTime() - this.startTime) / 1000
    this.moneySpent = this.secondsPassed * this.secondlyRate
    this.moneyAfterTaxes = this.moneySpent * (1 - this.taxesPercentage / 100)
    this.moneySpentPretty = this.getPrettyMoney(this.moneySpent)
    this.moneyAfterTaxesPretty = this.getPrettyMoney(this.moneyAfterTaxes)
  }
}
