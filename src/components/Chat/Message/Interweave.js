/**
 * Copyright (c) [2020] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import React from 'react';
import BaseInterweave from 'interweave';
import { useEmojiData, EmojiMatcher } from 'interweave-emoji';
import { UrlMatcher } from 'interweave-autolink';
import ImgMatcher from './ImgMatcher';

// Interweave documentation recommends to compound around Interweave
// itself using a custom component.
export default function Interweave({ filters = [], matchers = [], ...props }) {
  const [_emojis, source, _manager] = useEmojiData({ compact: false });

  const globalFilters = [];

  const globalMatchers = [
    new ImgMatcher('img', { onRender: props.onRender }),
    new UrlMatcher('url'),
    new EmojiMatcher('emoji', {
      convertEmoticon: true,
      convertShortcode: true,
      enlargeThreshold: 0
    })
  ];

  return (
    <BaseInterweave
      filters={[...globalFilters, ...filters]}
      matchers={[...globalMatchers, ...matchers]}
      emojiSource={source}
      {...props}
    />
  );
}
