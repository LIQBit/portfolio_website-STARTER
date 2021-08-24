import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Leigh Bitossi
      </SectionTitle>
      <SectionText>
      I'm a website developer with experience in editing and media and I also have a passion for building easy-to-use websites and applications. I'm looking for a role as an entry-level Frontend developer.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;