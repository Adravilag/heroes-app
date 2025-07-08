import { useLanguage } from '../context/LanguageContext';
import './ModernLanguageSelector.css';

const ModernLanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  const getCurrentLanguageFlag = () => {
    const flags: { [key: string]: string } = {
      'en': '🇺🇸',
      'es': '🇪🇸'
    };
    return flags[currentLanguage] || '🌐';
  };

  return (
    <div className="modern-language-selector">
      <div className="language-display">
        <span className="language-flag">{getCurrentLanguageFlag()}</span>
        <span className="language-code">{currentLanguage.toUpperCase()}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="dropdown-arrow">
          <path d="M6 8L2 4h8l-4 4z"/>
        </svg>
      </div>
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-select-hidden"
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModernLanguageSelector;
