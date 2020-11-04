import React from 'react';
import cn from 'classnames';

import styles from './FooterPanel.module.scss';

interface IFooterPane {
  handlerApplay: () => void;
  handlerReset: () => void;
  applyText?: string;
}

const FooterPanel = function ({
  handlerApplay,
  handlerReset,
  applyText,
}: IFooterPane) {
  return (
    <div className={cn(styles.FooterPanel)}>
      <button
        type="button"
        className="t-btn t-btn_link t-btn_dangerous t-btn_underline t-btn_p0"
        onClick={handlerReset}
      >
        <span>Reset</span>
      </button>
      <button
        type="button"
        className="t-btn t-btn_primary t-btnbold "
        onClick={handlerApplay}
      >
        <span>{applyText || 'Apply'}</span>
      </button>
    </div>
  );
};

export default FooterPanel;
