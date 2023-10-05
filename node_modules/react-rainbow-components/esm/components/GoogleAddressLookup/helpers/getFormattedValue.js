import React from 'react';
export default function getFormattedValue(value, highlightMatch, icon) {
  if (!value) return null;

  if (value && typeof value === 'string') {
    return {
      label: value,
      icon: icon
    };
  }

  var prediction = value.predictionInfo ? value.predictionInfo : value;
  var formattedLabel;

  if (highlightMatch) {
    formattedLabel = prediction.structured_formatting.main_text_matched_substrings.reduceRight(function (prev, currentMatch, index) {
      var matchedTerm = prev.head.slice(currentMatch.offset, currentMatch.offset + currentMatch.length);
      var initialPart = prev.head.slice(0, currentMatch.offset);
      var finalPart = prev.head.slice(currentMatch.offset + currentMatch.length);

      if (index > 0) {
        return {
          head: initialPart,
          tail: React.createElement(React.Fragment, null, React.createElement("b", null, matchedTerm), finalPart, prev.tail)
        };
      }

      return React.createElement("span", null, initialPart, React.createElement("b", null, matchedTerm), finalPart, prev.tail);
    }, {
      head: prediction.structured_formatting.main_text,
      fullText: prediction.structured_formatting.main_text,
      tail: ''
    });
  } else {
    formattedLabel = prediction.description;
  }

  return {
    id: prediction.place_id,
    label: formattedLabel,
    description: prediction.structured_formatting.secondary_text,
    icon: icon
  };
}