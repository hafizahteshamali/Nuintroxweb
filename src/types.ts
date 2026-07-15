export interface NavItem {
  label: string;
  href: string;
}

export interface ECardTemplate {
  id: string;
  name: string;
  gradient: string;
  textColor: string;
}

export interface UserEcardData {
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  templateId: string;
  linkedin?: string;
  twitter?: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}
