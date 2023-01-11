import { create, NanoRenderer } from 'nano-css';
import { addon as addonCSSOM, CSSOMAddon } from 'nano-css/addon/cssom';
import { addon as addonVCSSOM, VCSSOMAddon } from 'nano-css/addon/vcssom';
import { cssToTree } from 'nano-css/addon/vcssom/cssToTree';
import React, { DependencyList } from 'react';
import { useTheme } from '..';
import { useMemo } from 'react';
import { computeCss } from '../utils';
import { Updater, useImmer } from '@bhzdebrhm/react-hooks/dist/useImmer';

type Nano = NanoRenderer & CSSOMAddon & VCSSOMAddon;
const nano = create() as Nano;
addonCSSOM(nano);
addonVCSSOM(nano);

let counter = 0;

function useStyle<S extends Record<string, unknown> | React.CSSProperties>(styles: S, deps: DependencyList | undefined = []): [string, Updater<S>]  {
    const [localStyle, setLocalStyles] = useImmer(styles, deps);
    const className = useMemo(() => (counter++).toString(36), []);
    const sheet = useMemo(() => new nano.VSheet(), []);
    const theme = useTheme();

  React.useInsertionEffect(() => {
    const computedCss = computeCss(localStyle)(theme);
    const tree = {};
    cssToTree(tree, computedCss, '.' + className, '');
    sheet.diff(tree);

    return () => {
      sheet.diff({});
    };
  }, [className, sheet, theme, localStyle]);

  return [className, setLocalStyles];
};

export default useStyle;