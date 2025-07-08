import { useLanguage } from '../../i18n/i18n';

interface WelcomeMessageProps {
  userName: string;
}

const WelcomeMessage = ({ userName }: WelcomeMessageProps) => {
  const { t } = useLanguage();

  return (
    <div className="welcome-message">
      <h2>{t('auth.login.welcome')}</h2>
      <p>{t('auth.login.subtitle')}</p>
      {userName && (
        <p className="user-greeting">
          {t('common.loading')} {userName}...
        </p>
      )}
    </div>
  );
};

export default WelcomeMessage;
