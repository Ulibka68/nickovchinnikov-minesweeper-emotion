# Если использовать как boilerplate - удали formik

# Minesweeper
author: Nikita Ovchinnikov

Помогите пожалуйста подключить Emotion к storybook.
Ранее Вы дали ссылку на свой проект с Emotion:
https://github.com/nickovchinnikov/minesweeper

У Вас использовался только Emotion styled, а я хочу заставить работать Emotion css.
Проблема в том что в новой версии React 17 используется новая система преобразования в jsx,  в частности уже не работает pragma /** @jsx jsx */

Ок, подключил plugin babel как написано в документации
Проблема в том что в разных местах документации написано по разному как его подключать, выяснилось что достаточно подключить в babel  plugins: ['@emotion']
plugins: ['@emotion/babel-plugin'] Тоже пробовал - но ничего не поменялось (не заработало)

Если все это дело оставить так - то storybook перестает компилироваться.
Чтобы storybook компилировался - надо в main.js добавить алиасы
(ISSUE: https://github.com/storybookjs/storybook/issues/13277)

    webpackFinal: (config) => ({
    
        // добавлены алиасы для работы CSS взято отсюда:
        // https://github.com/storybookjs/storybook/issues/13277
        // пример от openscript
        // https://github.com/openscript/react-section-dividers/tree/feat/emotion11
        "@emotion/core": toPath("node_modules/@emotion/react"),
        "@emotion/styled": toPath("node_modules/@emotion/styled"),
        "emotion-theming": toPath("node_modules/@emotion/react"),
    },
    },

После этого storybook благополучно запускается.
Для проверки css добавил простой компонент прямо из документации:

    export default function Button(props: IButtonProps) {
    return (
        <button
            css={{
                backgroundColor: 'hotpink',
                '&:hover': {
                color: 'lightgreen',
                },
            }}
        >
            Вася
        </button>
    );
    }

Это должна быть кнопка с цветом hotpink.
В обычном режиме - start программа запускается и демонстрирует кнопку цвета hotpink
В storybook css запускаться почему то никак не хочет и имеет серый фон.