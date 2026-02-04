import {
  Container,
  Title,
  Text,
  Paper,
  Group,
  Stack,
  Anchor,
  Divider,
  List,
  Box,
  Grid,
  Card,
  AspectRatio,
  Badge,
  Flex,
} from '@mantine/core'
import { IconMail, IconPhone, IconBrandLinkedin, IconBrandGithub, IconExternalLink } from '@tabler/icons-react'

function Resume() {
  return (
    <Container size="md" py="xl">
      <Paper 
        shadow="xl" 
        p="xl" 
        radius="md"
      >
        <Stack gap="lg">
          {/* Header */}
          <Box>
            <Title 
              order={1} 
              size="h1" 
              mb="md"
              c="cyan"
            >
              Jeff Keith
            </Title>
            <Text size="sm" c="dimmed" mb="xs">
              North Port, FL 34286
            </Text>
            <Group gap="md" mb="md">
              <Anchor
                href="mailto:me@jeffkeith.me"
                size="sm"
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <IconMail size={16} />
                me@jeffkeith.me
              </Anchor>
              <Anchor
                href="tel:+15857388598"
                size="sm"
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <IconPhone size={16} />
                +1 585 738 8598
              </Anchor>
            </Group>
            <Group gap="md">
              <Anchor
                href="https://www.linkedin.com/in/jeff-keith-8b263967"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <IconBrandLinkedin size={16} />
                LinkedIn
              </Anchor>
              <Anchor
                href="https://github.com/keefer33"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <IconBrandGithub size={16} />
                GitHub
              </Anchor>
            </Group>
          </Box>

          <Divider color="rgba(6, 182, 212, 0.3)" />

          {/* Recent Projects */}
          <Box>
            <Title 
              order={2} 
              size="h2" 
              mb="md"
              c="cyan"
            >
              Recent Projects
            </Title>
            <Grid gutter="lg">
              {/* Sloot.ai Project */}
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Card 
                  shadow="lg" 
                  padding="lg" 
                  radius="md" 
                  withBorder 
                  h="100%"
                  style={{
                    background: 'rgba(6, 182, 212, 0.1)',
                    borderColor: 'rgba(6, 182, 212, 0.3)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(6, 182, 212, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <Stack gap="md">
                    <Box>
                      <Group justify="space-between" mb="xs">
                        <Title 
                          order={3} 
                          size="h3"
                          c="cyan"
                        >
                          Sloot.ai
                        </Title>
                        <Anchor
                          href="https://sloot.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <IconExternalLink size={18} />
                        </Anchor>
                      </Group>
                      <Text size="sm" c="dimmed">
                        Agentic AI platform for modern workflows
                      </Text>
                    </Box>
                    
                    {/* Loom Video Embed */}
                    <AspectRatio ratio={16 / 9}>
                      <iframe
                        src="https://www.loom.com/embed/36358c6746cf4671ab72c75fa0a12ada"
                        frameBorder="0"
                        allowFullScreen
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 'var(--mantine-radius-md)',
                        }}
                        title="Sloot.ai Demo Video"
                      />
                    </AspectRatio>
                  </Stack>
                </Card>
              </Grid.Col>

              {/* Genny.bot Project */}
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Card 
                  shadow="lg" 
                  padding="lg" 
                  radius="md" 
                  withBorder 
                  h="100%"
                  style={{
                    background: 'rgba(6, 182, 212, 0.1)',
                    borderColor: 'rgba(6, 182, 212, 0.3)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(6, 182, 212, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <Stack gap="md">
                    <Box>
                      <Group justify="space-between" mb="xs">
                        <Title 
                          order={3} 
                          size="h3"
                          c="cyan"
                        >
                          Genny.bot
                        </Title>
                        <Anchor
                          href="https://genny.bot/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <IconExternalLink size={18} />
                        </Anchor>
                      </Group>
                      <Text size="sm" c="dimmed">
                        Generative AI platform for creating images and videos
                      </Text>
                    </Box>
                    
                    {/* Loom Video Embed */}
                    <AspectRatio ratio={16 / 9}>
                      <iframe
                        src="https://www.loom.com/embed/b87541114c8d4a91b952bf7520fbb2d8"
                        frameBorder="0"
                        allowFullScreen
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 'var(--mantine-radius-md)',
                        }}
                        title="Genny.bot Demo Video"
                      />
                    </AspectRatio>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Box>

          <Divider color="rgba(6, 182, 212, 0.3)" />

          {/* Summary */}
          <Box>
            <Title 
              order={2} 
              size="h2" 
              mb="md"
              c="cyan"
            >
              Summary
            </Title>
            <Text size="sm" style={{ lineHeight: 1.7 }}>
            Senior Full Stack Engineer and Engineering Manager with 20+ years of experience designing, building, and scaling production web applications while leading high-performing teams. Strong background in TypeScript/JavaScript stacks, system architecture, cloud platforms, and end-to-end feature ownership. Builder-minded technical leader who combines hands-on engineering with people leadership, architectural direction, mentoring, and cross-functional collaboration. Experienced owning complex systems from design through production while also supporting team growth and delivery excellence. Recently completed a focused professional development period deepening expertise in AI-enabled systems, modern application architecture, and production-grade integrations. Passionate about building reliable, elegant software, raising engineering standards, and leveraging AI to accelerate product development and team effectiveness.
            </Text>
          </Box>

          <Divider color="rgba(6, 182, 212, 0.3)" />

          {/* Professional Development */}
          <Box>
            <Title 
              order={2} 
              size="h2" 
              mb="md"
              c="cyan"
            >
              Professional Development – AI & Full Stack Technical Leadership
            </Title>
            <Text fw={600} size="sm" mb="xs">
              Independent Study / Hands-On Projects
            </Text>
            <Text size="sm" c="dimmed" mb="md">
              May 2025 – Present
            </Text>
            <Text size="sm" mb="md" style={{ lineHeight: 1.7 }}>
            Intentional professional development period focused on strengthening principal-level engineering skills across full-stack architecture, AI integration, and production system design. Built two prototype applications: sloot.ai, an agentic automation platform with connectivity to 2,500+ services and custom MCP servers; and genny.bot, a generative AI application for creating and manipulating images and video using modern multimodal models. GitHub repositories, architectural deep-dives, and live application walkthroughs are available upon request.
            </Text>
            <List size="sm" spacing="xs" style={{ lineHeight: 1.7 }}>
              <List.Item>
                Built and deployed <strong>MCP (Model Context Protocol) servers</strong>, enabling
                structured, secure interaction between applications and AI models.
              </List.Item>
              <List.Item>
                Designed and implemented <strong>web-based applications integrated with AI/ML models</strong>, including
                OpenAI, Claude, Gemini, Grok, and DeepSeek.
              </List.Item>
              <List.Item>
                Gained hands-on experience orchestrating multi-model workflows, prompt design, tool
                calling, and system boundaries.
              </List.Item>
              <List.Item>
                Explored best practices for AI integration in production systems, including
                reliability, observability, and responsible usage.
              </List.Item>
              <List.Item>
                Applied learnings to accelerate feature development, improve developer workflows, and
                prototype complex systems quickly.
              </List.Item>
              <List.Item>
                Used this period to sharpen architectural judgment and return to the workforce as a{' '}
                <strong>
                  hands-on technical leader capable of owning complex systems while guiding teams
                  through modern AI-driven development.
                </strong>
              </List.Item>
            </List>
          </Box>

          <Divider color="rgba(6, 182, 212, 0.3)" />

          {/* Professional Experience */}
          <Box>
            <Title 
              order={2} 
              size="h2" 
              mb="md"
              c="cyan"
            >
              Professional Experience
            </Title>

            {/* Engineering Manager */}
            <Box mb="xl">
              <Title 
                order={3} 
                size="h3" 
                mb="xs"
                c="cyan"
              >
                Engineering Manager
              </Title>
              <Text fw={600} size="sm" mb="xs" c="dimmed">
                ButcherBox – Boston, MA
              </Text>
              <Text size="sm" c="dimmed" mb="md">
                July 2021 – May 1, 2025
              </Text>
              <List size="sm" spacing="xs" style={{ lineHeight: 1.7 }}>
                <List.Item>
                  Led and supported a cross‑functional engineering team through all Scrum
                  ceremonies, fostering accountability, engagement, and continuous improvement.
                </List.Item>
                <List.Item>
                  Conducted weekly 1:1s focused on career growth, performance feedback, and team
                  health.
                </List.Item>
                <List.Item>
                  Reviewed code regularly to ensure quality, knowledge sharing, and removal of
                  technical blockers.
                </List.Item>
                <List.Item>
                  Interviewed, hired, and onboarded engineers, contributing to team growth and
                  culture.
                </List.Item>
                <List.Item>
                  Partnered closely with Product Management and Scrum leadership to align delivery
                  with OKRs and business goals.
                </List.Item>
                <List.Item>
                  Implemented an improved release flow that reduced production defects and improved
                  overall customer experience.
                </List.Item>
                <List.Item>
                  Notable features released include a new member recipe experience, an AI‑enhanced
                  cancellation flow leveraging Palantir Foundry, and a trial box membership
                  offering.
                </List.Item>
              </List>
            </Box>

            {/* Lead Developer */}
            <Box mb="xl">
              <Title 
                order={3} 
                size="h3" 
                mb="xs"
                c="cyan"
              >
                Lead Developer
              </Title>
              <Text fw={600} size="sm" mb="xs" c="dimmed">
                Records One – Rochester, NY
              </Text>
              <Text size="sm" c="dimmed" mb="md">
                March 2019 – July 2021
              </Text>
              <List size="sm" spacing="xs" style={{ lineHeight: 1.7 }}>
                <List.Item>
                  Managed a fully remote development team in a Scrum environment.
                </List.Item>
                <List.Item>
                  Led sprint ceremonies including daily standups, refinement, retrospectives, and
                  reviews.
                </List.Item>
                <List.Item>
                  Reviewed, approved, and merged pull requests while mentoring engineers on best
                  practices.
                </List.Item>
                <List.Item>
                  Coordinated JavaScript releases and deployments with server and data teams.
                </List.Item>
                <List.Item>
                  Designed and developed Node.js APIs and integrated them into front‑end
                  applications.
                </List.Item>
                <List.Item>
                  Built CI pipelines and integration tests using Jenkins.
                </List.Item>
                <List.Item>
                  Improved build and deployment workflows through custom Grunt tasks.
                </List.Item>
              </List>
            </Box>

            {/* Web Application Developer - FabSuite */}
            <Box mb="xl">
              <Title 
                order={3} 
                size="h3" 
                mb="xs"
                c="cyan"
              >
                Web Application Developer
              </Title>
              <Text fw={600} size="sm" mb="xs" c="dimmed">
                FabSuite / Trimble – Kennesaw, GA
              </Text>
              <Text size="sm" c="dimmed" mb="md">
                January 2016 – April 2019
              </Text>
              <List size="sm" spacing="xs" style={{ lineHeight: 1.7 }}>
                <List.Item>
                  Primary developer for FabSuite Go, an API‑driven platform for steel fabrication
                  project management.
                </List.Item>
                <List.Item>
                  Designed and implemented features for inventory, shipping, inspections, and 3D
                  model integration.
                </List.Item>
                <List.Item>
                  Developed custom routing frameworks and implemented Google Material Design
                  standards.
                </List.Item>
                <List.Item>
                  Worked remotely in a Scrum‑based environment using Jira and Google Workspace.
                </List.Item>
              </List>
            </Box>

            {/* Web Application Developer - Freelance */}
            <Box mb="xl">
              <Title 
                order={3} 
                size="h3" 
                mb="xs"
                c="cyan"
              >
                Web Application Developer (freelance)
              </Title>
              <Text fw={600} size="sm" mb="xs" c="dimmed">
                Gigaweb / SavingLots.com / AsSeenOnTv.com – Rochester, NY
              </Text>
              <Text size="sm" c="dimmed" mb="md">
                1997 – 2016
              </Text>
              <List size="sm" spacing="xs" style={{ lineHeight: 1.7 }}>
                <List.Item>
                  Designed, built, and maintained custom web applications and e‑commerce platforms
                  across freelance, startup, and owner‑operator roles.
                </List.Item>
                <List.Item>
                  Delivered custom websites and marketing solutions for small businesses, improving
                  visibility, conversions, and operational efficiency.
                </List.Item>
                <List.Item>
                  Founded and operated an e‑commerce platform, implementing payment processing,
                  real‑time inventory, shipping integrations, and administrative tooling.
                </List.Item>
                <List.Item>
                  Developed full e‑commerce systems using PHP and MySQL, contributing to early growth
                  and long‑term scalability.
                </List.Item>
              </List>
            </Box>
          </Box>

          <Divider color="rgba(6, 182, 212, 0.3)" />

          {/* Education */}
          <Box>
            <Title 
              order={2} 
              size="h2" 
              mb="md"
              c="cyan"
            >
              Education
            </Title>
            <Box mb="md">
              <Text fw={600} size="sm" mb="xs">
                Computer Science (No Degree)
              </Text>
              <Text size="sm" c="dimmed">
                Rochester Institute of Technology – Rochester, NY
              </Text>
              <Text size="sm" c="dimmed">
                1996 – 1998
              </Text>
            </Box>
            <Box>
              <Text fw={600} size="sm" mb="xs">
                Associate's Degree – Business Management
              </Text>
              <Text size="sm" c="dimmed">
                Finger Lakes Community College
              </Text>
              <Text size="sm" c="dimmed">
                1990 – 1994
              </Text>
            </Box>
          </Box>

          <Divider color="rgba(6, 182, 212, 0.3)" />

          {/* Technical Skills */}
          <Box>
            <Title 
              order={2} 
              size="h2" 
              mb="md"
              c="cyan"
            >
              Technical Skills
            </Title>
            <Stack gap="md">
              <Box>
                <Text size="sm" fw={600} mb="xs" c="dimmed">
                  Core Languages
                </Text>
                <Flex gap="xs" wrap="wrap">
                  {['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML', 'CSS'].map((skill) => (
                    <Badge
                      key={skill}
                      size="lg"
                      color="cyan"
                      variant="filled"
                      style={{ textTransform: 'none' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text size="sm" fw={600} mb="xs" c="dimmed">
                  Modern Frameworks
                </Text>
                <Flex gap="xs" wrap="wrap">
                  {['React', 'Remix', 'Node.js'].map((skill) => (
                    <Badge
                      key={skill}
                      size="lg"
                      color="teal"
                      variant="filled"
                      style={{ textTransform: 'none' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text size="sm" fw={600} mb="xs" c="dimmed">
                  AI / LLM Integration
                </Text>
                <Flex gap="xs" wrap="wrap">
                  {['OpenAI', 'Claude', 'Gemini', 'Grok', 'DeepSeek', 'MCP Servers', 'Prompt Engineering', 'Tool Calling'].map((skill) => (
                    <Badge
                      key={skill}
                      size="lg"
                      color="cyan"
                      variant="filled"
                      style={{ textTransform: 'none' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text size="sm" fw={600} mb="xs" c="dimmed">
                  Platforms & Cloud
                </Text>
                <Flex gap="xs" wrap="wrap">
                  {['AWS', 'Docker', 'Linux/Ubuntu'].map((skill) => (
                    <Badge
                      key={skill}
                      size="lg"
                      color="teal"
                      variant="filled"
                      style={{ textTransform: 'none' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text size="sm" fw={600} mb="xs" c="dimmed">
                  Datastores
                </Text>
                <Flex gap="xs" wrap="wrap">
                  {['PostgreSQL', 'MySQL', 'MongoDB'].map((skill) => (
                    <Badge
                      key={skill}
                      size="lg"
                      color="cyan"
                      variant="filled"
                      style={{ textTransform: 'none' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text size="sm" fw={600} mb="xs" c="dimmed">
                  DevOps & Delivery
                </Text>
                <Flex gap="xs" wrap="wrap">
                  {['Git', 'CI/CD', 'Jenkins'].map((skill) => (
                    <Badge
                      key={skill}
                      size="lg"
                      color="teal"
                      variant="filled"
                      style={{ textTransform: 'none' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text size="sm" fw={600} mb="xs" c="dimmed">
                  Product & Commerce
                </Text>
                <Flex gap="xs" wrap="wrap">
                  {['Shopify', 'WordPress'].map((skill) => (
                    <Badge
                      key={skill}
                      size="lg"
                      color="cyan"
                      variant="filled"
                      style={{ textTransform: 'none' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text size="sm" fw={600} mb="xs" c="dimmed">
                  Ways of Working
                </Text>
                <Flex gap="xs" wrap="wrap">
                  {['Agile', 'Scrum', 'System Design', 'Engineering Management'].map((skill) => (
                    <Badge
                      key={skill}
                      size="lg"
                      color="teal"
                      variant="filled"
                      style={{ textTransform: 'none' }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Container>
  )
}

export default Resume

