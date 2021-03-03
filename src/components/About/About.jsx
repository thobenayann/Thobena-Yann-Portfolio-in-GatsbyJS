import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="A propos de moi" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Après 10 ans passés dans le commerce et la vente de matériel industriel, à manager et atteindre des objectifs de performance et de satisfaction client, j\'ai choisi de donner un nouvel élan à ma carrière et de relever un nouveau défi : celui de devenir développeur web !'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Il s\'agit d\'un métier qui me passionne, qui me permet d\'apprendre tous les jours et souvent par moi même mais avec en plus, cette sensation que tout est possible pour peu que l\'on ai une connexion internet à portée de main. J\'ai été formé au sein de l\'école O\'Clock depuis le mois d\'Août et j\'ai pu réaliser un projet de fin d\'étude durant 1 mois en tant que Git Master et Développeur Front. Pour se faire, j\'ai choisi d\'apprendre à maîtriser React et Redux afin d\'optimiser toujours plus l\'expérience des utilisateurs.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'De nature curieux et très impliqué, je m\'intéresse à tout nouveau défi, je m\'adapte très facilement en équipe et j\'aime partager mon expérience, aussi petite soit elle ! Mon nouvel objectif est de trouver une entreprise qui m\'accueille pour un stage d\'1 an en alternance afin de parfaire mes connaissances de développeur Full Stack, j\'aimerais ainsi me préparer à passer le titre professionnel de "Concepteur Développeur d\'Application"'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://drive.google.com/file/d/1YE76rnVy-z6eSSTtZPwTzkBuWe0b0OmO/view?usp=sharing"
                    >
                      Curriculum Vitae
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
