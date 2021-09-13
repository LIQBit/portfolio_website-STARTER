import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJavascript1, DiDjango, DiPython, DiPhotoshop } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiGatsby } from "react-icons/si";

const Technologies = () =>  (
 <Section id="tech">
   <br />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>Here are some languages, tools, technologies that I typically like to work with.</SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>React</ListTitle>
         
       </ListContainer>
     </ListItem>

     <ListItem>
       <SiGatsby size="2rem" />
       <ListContainer>
         <ListTitle>Gatsby</ListTitle>
         
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiJavascript1 size="3rem" />
       <ListContainer>
         <ListTitle>JavaScript</ListTitle>
         
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiDjango size="3rem" />
       <ListContainer>
         <ListTitle>Django</ListTitle>
         
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiPython size="3rem" />
       <ListContainer>
         <ListTitle>Python</ListTitle>
         
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiPhotoshop size="3rem" />
       <ListContainer>
         <ListTitle>Photoshop</ListTitle>
         
       </ListContainer>
     </ListItem>

   </List>
   
 </Section>
);

export default Technologies;
