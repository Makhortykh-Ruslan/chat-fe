import { JSX } from 'react';

import { cfIcon } from '../icons-config.ts';
import { useIconsContext } from '../IconsContext.tsx';

type IconProps = {
  name: cfIcon;
  size: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
};

export const Icon: (props: IconProps) => JSX.Element | null = ({
  name,
  size = 20,
  fill = '',
  stroke = '',
}) => {
  const { icons } = useIconsContext();

  let iconSvg = icons.get(name);

  if (!iconSvg) return null;

  if (fill) {
    iconSvg = iconSvg
      .replace(/<svg /, `<svg width="${size}" height="${size}" fill="${fill}" `)
      .replace(/fill="[^"]*"/, `fill="${fill}"`);
  }

  if (stroke) {
    iconSvg = iconSvg
      .replace(
        /<svg /,
        `<svg width="${size}" height="${size}" stroke="${stroke}"`,
      )
      .replace(/<path/g, `<path stroke="${stroke}" `);
  }

  return <span dangerouslySetInnerHTML={{ __html: iconSvg }} />;
};
