export {};

declare global {
  type SupportedLanguage = 'en-US' | 'vi-VN';

  type Translation = Record<SupportedLanguage, Record<string, string>>;
}
