declare namespace jest {
  interface Matchers<R> {
    /**
     * @deprecated
     */
    toBeInTheDOM(container?: HTMLElement | SVGElement): R
    toBeInTheDocument(): R
    toBeVisible(): R
    toBeEmpty(): R
    toBeDisabled(): R
    toBeEnabled(): R
    toBeInvalid(): R
    toBeRequired(): R
    toBeValid(): R
    toContainElement(element: HTMLElement | SVGElement | null): R
    toContainHTML(htmlText: string): R
    toHaveAttribute(attr: string, value?: any): R
    toHaveClass(...classNames: string[]): R
    toHaveFocus(): R
    toHaveFormValues(expectedValues: {[name: string]: any}): R
    toHaveStyle(css: string): R
    toHaveTextContent(
      text: string | RegExp,
      options?: {normalizeWhitespace: boolean},
    ): R
  }
}
