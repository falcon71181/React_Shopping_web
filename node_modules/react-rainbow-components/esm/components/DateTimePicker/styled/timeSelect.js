import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import TimeSelect from '../../TimePicker/timeSelect';
var StyledTimeSelect = styled(TimeSelect)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-top: 60px;\n\n    @media (max-width: 800px) {\n        margin-top: 0;\n    }\n\n    div[role='presentation'] {\n        @media (max-width: 800px) {\n            margin-top: 0;\n            margin-bottom: 10px;\n            height: 76px;\n        }\n    }\n\n    footer {\n        justify-content: flex-end;\n    }\n"])));
export default StyledTimeSelect;