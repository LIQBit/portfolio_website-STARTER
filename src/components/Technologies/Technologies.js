import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiGatsby } from "react-icons/si";

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>Here is some text about my background, what I've done, and what I can do, etc.</SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>React</ListTitle>
         <ListParagraph>
           Experience with <br />
           React.js
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <SiGatsby size="2rem" />
       <ListContainer>
         <ListTitle>Gatsby</ListTitle>
         <ListParagraph>
           Experience with <br />
           Node.js and Databases
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiZend size="3rem" />
       <ListContainer>
         <ListTitle>JavaScript</ListTitle>
         <ListParagraph>
           Experience with <br />
           tools like Figma
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiZend size="3rem" />
       <ListContainer>
         <ListTitle>Django</ListTitle>
         <ListParagraph>
           Experience with <br />
           tools like Figma
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiZend size="3rem" />
       <ListContainer>
         <ListTitle>Django</ListTitle>
         <ListParagraph>
           Experience with <br />
           tools like Figma
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiZend size="3rem" />
       <ListContainer>
         <ListTitle>Django</ListTitle>
         <ListParagraph>
           Experience with <br />
           tools like Figma
         </ListParagraph>
       </ListContainer>
     </ListItem>
     
   </List>
   
 </Section>
);

export default Technologies;
