export const maintainersData = [
  { login: 'rupali-codes', name: 'Rupali Haldiya' },
  { login: 'CBID2', name: 'Christine Belzie' },
  { login: 'Anmol-Baranwal', name: 'Anmol Baranwal' },
  { login: 'aftabrehan', name: 'Aftab Rehan' },
]

export interface MaintainersDataInterface {
  name: string
  avatarUrl: string
  login: string
  designation: string
  role: string
  themeColor: string
  roleBg: string
  txtTheme: string
  firstLink: string
  firstTxt: string
  secondLink: string
  secondTxt: string
  thirdLink: string
  thirdTxt: string
}

export const Maintainers: MaintainersDataInterface[] = [
  {
    name: 'Rupali Haldiya',
    avatarUrl: 'https://avatars.githubusercontent.com/u/78981177?v=4',
    login: 'rupali-codes',
    designation: 'FullStack Developer',
    role: 'Founder',
    themeColor: '#3D3749',
    roleBg: '#EF608633',
    txtTheme: '#EF6086',
    firstLink: 'https://github.com/sponsors/rupali-codes',
    firstTxt: 'Sponsor',
    secondLink: 'https://github.com/rupali-codes',
    secondTxt: 'GitHub',
    thirdLink: 'https://twitter.com/rupali_codes',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Anmol Baranwal',
    avatarUrl: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    login: 'Anmol-Baranwal',
    designation: 'Software Developer',
    role: 'Maintainer',
    themeColor: '#FFD3621A',
    roleBg: '#FFD36226',
    txtTheme: '#FFE5A3',
    firstLink: 'https://www.linkedin.com/in/Anmol-Baranwal',
    firstTxt: 'LinkedIn',
    secondLink: 'https://github.com/Anmol-Baranwal',
    secondTxt: 'GitHub',
    thirdLink: 'https://twitter.com/Anmol_Codes',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Christine Belzie',
    avatarUrl: 'https://avatars.githubusercontent.com/u/105683440?v=4',
    login: 'CBID2',
    designation: 'Technical Writer',
    role: 'Maintainer',
    themeColor: '#FFD3621A',
    roleBg: '#FFD36226',
    txtTheme: '#FFE5A3',
    firstLink: 'https://github.com/sponsors/CBID2',
    firstTxt: 'Sponsor',
    secondLink: 'https://www.linkedin.com/in/christinebelzie',
    secondTxt: 'LinkedIn',
    thirdLink: 'https://twitter.com/CodesChrissy',
    thirdTxt: 'Twitter',
  },
  {
    name: 'Aftab Rehan',
    avatarUrl: 'https://avatars.githubusercontent.com/u/93012310?v=4',
    login: 'aftabrehan',
    designation: 'UI/UX Designer',
    role: 'Designer',
    themeColor: '#9655A033',
    roleBg: '#9655A080',
    txtTheme: '#E88DF6',
    firstLink: 'https://aftabrehan.com',
    firstTxt: 'Website',
    secondLink: 'https://github.com/aftabrehan',
    secondTxt: 'GitHub',
    thirdLink: 'https://twitter.com/aftabrehan_',
    thirdTxt: 'Twitter',
  },
]

export interface Contributor {
  id: number
  avatar_url: string
  name: string
  login: string
  contributions: number
}

export const dummyContributors: Contributor[] = [
  {
    id: 1,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'John Doe',
    login: 'johndoe',
    contributions: 15,
  },
  {
    id: 2,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Jane Smith',
    login: 'janesmith',
    contributions: 10,
  },
  {
    id: 3,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 4,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
  {
    id: 5,
    avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
    name: 'Bob Johnson',
    login: 'bobjohnson',
    contributions: 5,
  },
]
