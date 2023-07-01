import {
  ExternalLinkIcon,
  TriangleDownIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListItem,
  Center,
  Heading,
  Tag,
  Icon,
  Link,
  Text,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  ListIcon,
  useColorModeValue,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { HiLightningBolt, HiLightBulb, HiStar } from "react-icons/hi";
import { Date, Meta, WorkImage } from "../../components/Custom";
import Section from "../../components/Section";
import Work from "../../components/Work";
import { ImCheckmark } from "react-icons/im";
import { PiTarget, PiTargetBold } from "react-icons/pi";

const Asdd = () => {
  return (
    <Work>
      <WorkImage
        isDisable
        src={"/images/works/thumb_ASDD.jpg"}
        alt={"thumb_ASDD"}
      />
      <Date>2019 - </Date>
      <Text variant={"section-paragraph"}>
        Depuis 2019 je dirige l&apos;ASDD - Krav Maga Décines, association loi
        1901, accompagné du bureau et d&apos;une équipe de bénévoles.
        J&apos;insuffle ma vision et veille au bon développement du club. Je
        suis notamment responsable de la transition vers le numérique pour
        laquelle j&apos;ai mis en place l&apos;ensemble des supports et
        services. Nous pouvons nous féliciter d&apos;une belle croissance qui se
        maintient année après année.
      </Text>
      <List ml={4} my={4}>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Website</Meta>
            <Link href="https://kravmagadecines.fr/" isExternal>
              https://kravmagadecines.fr/
              <ExternalLinkIcon mx={1} boxSize={3} />
            </Link>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Catégorie</Meta>
            <Text>
              Leadership, Gestion de projets, Développement, Design Graphique
            </Text>
          </Center>
        </ListItem>
        <ListItem>
          <Center justifyContent={"start"}>
            <Meta>Outils</Meta>
            <Text>WordPress, PHP / SQL, Stripe, Notion, Outils Graphiques</Text>
          </Center>
        </ListItem>
      </List>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Impact
        </Heading>
        <StatGroup>
          <Stat>
            <StatLabel>Nombre d&apos;inscrits</StatLabel>
            <StatNumber color="green.400">200+</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              +80% vs pre-Covid
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Augmentation des recettes</StatLabel>

            <StatNumber color="green.400">+125%</StatNumber>

            <StatHelpText>
              <StatArrow type="increase" />
              20k à 45k €
            </StatHelpText>
          </Stat>
        </StatGroup>
        <StatGroup>
          <Stat>
            <StatLabel>Transition Numérique</StatLabel>
            <StatNumber>
              <Icon as={ImCheckmark} boxSize={30} color="green.400" />
            </StatNumber>
            <StatHelpText>100% en ligne</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Taille de l&apos;&Eacute;quipe</StatLabel>
            <StatNumber color="green.400">+3</StatNumber>
            <StatHelpText>depuis 2021</StatHelpText>
          </Stat>
        </StatGroup>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Retrospective
        </Heading>
        <List spacing={4}>
          <ListItem>
            <Text>
              <Tag
                size="lg"
                colorScheme="red"
                borderRadius="full"
                mr={1}
                sx={{ verticalAlign: "baseline" }}
              >
                <Icon as={HiLightningBolt} mr={1} boxSize={4} />
                Challenge
              </Tag>
              Reprendre la direction d&apos;une association et relancer son
              activité
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Tag
                size="lg"
                colorScheme="blue"
                borderRadius="full"
                mr={1}
                sx={{ verticalAlign: "baseline" }}
              >
                <Icon as={HiLightBulb} mr={1} boxSize={4} />
                Découverte
              </Tag>
              Créer une vision et développer les stratégies pour s&apos;y
              diriger, Manager une équipe, Gérer une base clients de plus de
              200+ personnes
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Tag
                size="lg"
                colorScheme="green"
                borderRadius="full"
                mr={1}
                sx={{ verticalAlign: "baseline" }}
              >
                <Icon as={HiStar} mr={1} boxSize={4} />
                Points Forts
              </Tag>
              Enjeux Sociaux / Impact Local / Responsabilités / Promotion de
              l&apos;Activité Physique
            </Text>
          </ListItem>
        </List>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          E-Transformation
        </Heading>
        <Accordion allowToggle allowMultiple defaultIndex={[0]}>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <>
                  <AccordionButton>
                    <TriangleDownIcon
                      fontSize="16px"
                      color="blue.500"
                      sx={
                        isExpanded
                          ? {
                              transform: "rotate(0deg)",
                              transition: "transform .5s ease",
                            }
                          : {
                              transform: "rotate(-90deg)",
                              transition: "transform .5s ease",
                            }
                      }
                    />
                    <Heading
                      as="h4"
                      textAlign="left"
                      variant={"section-subtitle"}
                    >
                      <Box as={"span"} fontSize={14} fontWeight={"medium"}>
                        2021 - 2023
                      </Box>{" "}
                      WordPress & Stripe
                    </Heading>
                  </AccordionButton>
                </>
                <AccordionPanel>
                  <Box
                    bg={useColorModeValue("gray.300", "gray.800")}
                    borderRadius={"lg"}
                    mb={2}
                    px={2}
                    py={1}
                  >
                    <Heading as="h5" fontSize={18}>
                      Objectifs
                    </Heading>
                    <List>
                      <ListItem display={"flex"} alignItems={"center"}>
                        <ListIcon as={PiTargetBold} color="pink.500" />
                        Héberger sa propre solution et base de données
                      </ListItem>
                      <ListItem display={"flex"} alignItems={"center"}>
                        <ListIcon as={PiTargetBold} color="pink.500" />
                        Visualisation des metrics importants en temps réel
                      </ListItem>
                      <ListItem display={"flex"} alignItems={"center"}>
                        <ListIcon as={PiTargetBold} color="pink.500" />
                        Continuité dans l&apos;expérience client
                      </ListItem>
                      <ListItem display={"flex"} alignItems={"center"}>
                        <ListIcon as={PiTargetBold} color="pink.500" />
                        Simplification du passage d&apos;une saison à
                        l&apos;autre
                      </ListItem>
                    </List>
                  </Box>
                  <Text variant={"section-paragraph"}>
                    Profitant de la période COVID et du ralentissement de notre
                    activité j&apos;ai construis{" "}
                    <Link href="https://kravmagadecines.fr" isExternal>
                      un site sous WordPress
                      <ExternalLinkIcon mx={1} boxSize={3} />
                    </Link>{" "}
                    (site actuel) à l&apos;aide du builder{" "}
                    <Link href="https://oxygenbuilder.com/" isExternal>
                      Oxygen
                      <ExternalLinkIcon mx={1} boxSize={3} />
                    </Link>
                    . En utilisant des fonctions customs ainsi que différents
                    plugins j&apos;ai pu faire des intégrations avec{" "}
                    <Link href="https://stripe.com/fr" isExternal>
                      Stripe
                      <ExternalLinkIcon mx={1} boxSize={3} />
                    </Link>{" "}
                    pour gérer la partie paiement et{" "}
                    <Link href="https://mailchimp.com" isExternal>
                      MailChimp
                      <ExternalLinkIcon mx={1} boxSize={3} />
                    </Link>{" "}
                    côté CRM / Mailing. Le tout entièrement customisé par mes
                    soins pour fournir une expérience aussi seamless que
                    possible pour nos adhérents et pour mon équipe.
                  </Text>
                  <Stack>
                    <Box as="span">
                      <WorkImage
                        src={"/images/works/asdd_stripe01.png"}
                        alt={"Capture du Dashboard de Stripe"}
                      />
                      <Center>
                        <Text
                          textAlign={"center"}
                          as={"i"}
                          fontSize={"sm"}
                          color={useColorModeValue("gray.600", "gray.400")}
                        >
                          Dashboard de Stripe sur l&apos;année en cours.
                        </Text>
                      </Center>
                    </Box>
                    <Box as="span">
                      <WorkImage
                        src={"/images/works/asdd_wp01.png"}
                        alt={"Capture du Builder pour la Home Page du site"}
                      />
                      <Center>
                        <Text
                          textAlign={"center"}
                          as={"i"}
                          fontSize={"sm"}
                          color={useColorModeValue("gray.600", "gray.400")}
                        >
                          Preview de la page d&apos;accueil du site sur le
                          builder Oxygen.
                        </Text>
                      </Center>
                    </Box>
                  </Stack>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <>
                  <AccordionButton>
                    <TriangleDownIcon
                      fontSize="16px"
                      color="blue.500"
                      sx={
                        isExpanded
                          ? {
                              transform: "rotate(0deg)",
                              transition: "transform .5s ease",
                            }
                          : {
                              transform: "rotate(-90deg)",
                              transition: "transform .5s ease",
                            }
                      }
                    />
                    <Heading
                      as="h4"
                      textAlign="left"
                      variant={"section-subtitle"}
                    >
                      <Box as={"span"} fontSize={14} fontWeight={"medium"}>
                        2018 - 2021
                      </Box>{" "}
                      HelloAsso.com
                    </Heading>
                  </AccordionButton>
                </>
                <AccordionPanel>
                  <Box
                    bg={useColorModeValue("gray.300", "gray.800")}
                    borderRadius={"lg"}
                    mb={2}
                    px={2}
                    py={1}
                  >
                    <Heading as="h5" fontSize={18}>
                      Objectifs
                    </Heading>
                    <List>
                      <ListItem display={"flex"} alignItems={"center"}>
                        <ListIcon as={PiTargetBold} color="pink.500" />
                        Faciliter les paiements
                      </ListItem>
                      <ListItem display={"flex"} alignItems={"center"}>
                        <ListIcon as={PiTargetBold} color="pink.500" />
                        Simplifier le processus d&apos;adhésion
                      </ListItem>
                      <ListItem display={"flex"} alignItems={"center"}>
                        <ListIcon as={PiTargetBold} color="pink.500" />
                        Générer automatiquement une base de données des inscrits
                      </ListItem>
                      <ListItem display={"flex"} alignItems={"center"}>
                        <ListIcon as={PiTargetBold} color="pink.500" />
                        Conserver les supports habituels de l&apos;équipe
                      </ListItem>
                    </List>
                  </Box>
                  <Text variant={"section-paragraph"}>
                    Lorsqu&apos;en 2017 j&apos;intègre l&apos;association en
                    tant que simple adhérent tout se fait encore sur papier et
                    est entré manuellement dans d&apos;innombrables tableurs
                    excel...
                    <br />1 an et demi plus tard les dirigeants me proposent
                    d&apos;apporter mon expertise numérique au service du club.
                    La première étape fût de remplacer les supports papiers, des
                    chèques et des espèces pour automatiser l&apos;acquisition
                    des inscriptions, des paiements et la création des fichiers
                    excel : pour conserver le support sur lequel les équipes
                    avaient l&apos;habitude de travailler.
                    <Box my={2}>
                      <WorkImage
                        src={"/images/works/asdd_helloasso01.png"}
                        alt={"Une de nos campagnes d'adhésions HelloAsso"}
                      />
                    </Box>
                    J&apos;ai utilisé pour cela les services d&apos;
                    <Link href="https://www.helloasso.com/">
                      HelloAsso
                      <ExternalLinkIcon mx={1} boxSize={3} />
                    </Link>{" "}
                    et un système d&apos;exportation maison vers Google Drive.
                    Le choix d&apos;un service tiers me semblait évident pour
                    garantir la sécurité des informations de paiement et la
                    fiabilité du système.
                    <br />
                    Malgré quelques réfractaires la grande majorité des
                    adhésions étaient maintenant digitalisées facilitant ainsi
                    le travail du bureau et améliorant l&apos;expérience client.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Section>
    </Work>
  );
};

export default Asdd;
