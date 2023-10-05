import React, { useMemo } from 'react';
import unified from 'unified';
import markdownParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import minify from 'rehype-minify-whitespace';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';
import { defaultRenderer } from '../renderers';
export default function useMarkdown2React(source) {
  var renderer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRenderer;
  return useMemo(function () {
    return unified().use(markdownParse).use(remark2rehype).use(highlight, {
      subset: false
    }).use(rehype2react, {
      createElement: React.createElement,
      components: renderer
    }).use(minify, {
      newlines: true
    }).processSync(source).result;
  }, [source, renderer]);
}