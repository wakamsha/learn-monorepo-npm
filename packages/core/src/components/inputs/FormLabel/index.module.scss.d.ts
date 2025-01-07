export type Styles = {
  base: string;
  'label-text': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
