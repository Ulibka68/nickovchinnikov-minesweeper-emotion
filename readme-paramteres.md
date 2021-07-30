Помогите пожалуйста найти документацию по storybook.
К каждой story можно написать parameters, например: 
Story1.parameters = {
options: { selectedPanel: 'storybook/actions/panel' },
};

Просмотром github storybook удалось установить что у parameters есть как минимум следующие ключи:
layout
backgrounds
chromatic
docs
controls
include
exclude
sort
options

К сожалению типизирован только ключ layout (фиксированный enum)
Помогите пожалуйста найти описание к остальным ключам - что туда можно передавать и как ведет себя storybook.

Просмотрел все страницы на https://storybook.js.org/ но ничего не нашел.

export interface Parameters {
fileName?: string;
options?: OptionsParameter;
/** The layout property defines basic styles added to the preview body where the story is rendered. If you pass 'none', no styles are applied. */
layout?: 'centered' | 'fullscreen' | 'padded' | 'none';
docsOnly?: boolean;
[key: string]: any;
}


Story1.parameters = {
options: { selectedPanel: 'storybook/actions/panel' },
};


ArgTypesRegexExample.parameters = { actions: { argTypesRegex: '^on.*' } };

parameters: {
backgrounds: {
default: 'dark',
values: [
{ name: 'white', value: '#ffffff' },
{ name: 'light', value: '#eeeeee' },
{ name: 'gray', value: '#cccccc' },
{ name: 'dark', value: '#222222' },
{ name: 'black', value: '#000000' },
],
},

GridCellProperties.parameters = {
backgrounds: {
grid: {
cellSize: 10,
cellAmount: 4,
opacity: 0.2,
},
},
};

parameters: {
chromatic: { disable: true },
},

Basic.parameters = {
chromatic: { disable: false },
docs: { source: { state: 'open' } },
storyshots: { disable: true },
};

CustomControlMatchers.parameters = {
controls: {
matchers: {
date: /whateverIwant/,
},
},
docs: { source: { state: 'open' } },
};

WithDisabledCustomControlMatchers.parameters = {
controls: {
matchers: {
date: null,
color: null,
},
},
};

controls: {
include: ['Children'],
},

controls: {
include: /hello*/,
},

controls: {
exclude: ['helloPlanet', 'helloWorld'],
},

options: {
name: 'Custom Storybook',
showPanel: false,
},

MockIs4.parameters = { query: { mock: 4 } };


block.parameters = {
async puppeteerTest(page) {
const element = await page.$('[data-test-block]');
await element.hover();
const textContent = await element.getProperty('textContent');
const text = await textContent.jsonValue();
// eslint-disable-next-line jest/no-standalone-expect
expect(text).toBe('I am hovered');
},
};

controls: { sort: 'none' }
controls: { sort: 'alpha' }
controls: { sort: 'requiredFirst' }


docs: {
inlineStories: false,
description: {
component: 'Component description **markdown** override',
},
},

```
export const parameters = {
options: {
    storySort: (a, b) =>
    a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

// .storybook/preview.js

export const parameters = {
  options: {
    storySort: {
      order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],
    },
  },
};
```


