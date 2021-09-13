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
      Front-End Developer.<br /> <br /> Have a look around, get to know a bit about me, some of my work, and maybe even get in touch!
      </SectionText>
      {/*<Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>*/}
    </LeftSection>
  </Section>
);

export default Hero;