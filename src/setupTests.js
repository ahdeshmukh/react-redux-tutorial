// https://www.youtube.com/watch?v=EgJZv9Iyj-E&list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});