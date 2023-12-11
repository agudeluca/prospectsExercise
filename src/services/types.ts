export type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  birthDate: string;
  email: string;
  isProspect: boolean;
}

export type QualificationType = {value: number; id: string};
