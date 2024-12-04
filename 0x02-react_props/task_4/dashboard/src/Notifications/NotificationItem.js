import React from 'react';
import './Notifications.css';
import 'prop-types';
import PropTypes from 'prop-types';
import { html } from 'cheerio';

function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html? {__html:html} : undefined}>
      {value && !html ? value: null }
    </li>
  );
}

NotificationItem.prototype = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
}

export default NotificationItem
