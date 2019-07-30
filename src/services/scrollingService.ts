/**
 * This class is an abstraction layer for scrolling functionality
 */
export class ScrollingService {
  /**
   * For a given id this function will make sure that an element was scrolled into the view.
   */
  public static scrollIntoView(
    id: string,
    options?: ScrollIntoViewOptions
  ): void {
    // you could argue that this a very low level approach for a React application and you should use refs for that
    // but since you'd have to create refs in the app.tsx and pass it down to every component that wants to be able to
    // scroll to another element, that seemed rather overkill
    const element = document.getElementById(id);

    if (!element) {
      throw new Error(`Couldn't find element with id ${id}`);
    }

    element.scrollIntoView({
      behavior: options ? options.behavior : 'smooth',
      ...options
    });
  }

  /**
   * Scrolls to a given position
   */
  public static scrollTo({
    behavior = 'smooth',
    left,
    top
  }: ScrollToOptions): void {
    window.scrollTo({ top, left, behavior });
  }
}
