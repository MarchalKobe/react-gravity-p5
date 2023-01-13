import NoSSR from 'react-no-ssr';

import { ButtonsMinified } from '~/features/ui/buttons-minified3/buttons-minified.component';

export default function ButtonsPage() {
  return (
    <NoSSR>
      <ButtonsMinified />
    </NoSSR>
  );
}
