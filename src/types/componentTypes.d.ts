export type DashboardNavTypes = {
  destination: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export type AdminPanelWrapper = {
  children: React.ReactNode;
  header: string;
  className?: string;
};

export type DeleteModal = {
  setDeleteImageModalState: (boolean) => void;
  deleteMemberHandler: () => void;
  cancelDeleting: () => void;
};

export type Image = {
  image: string;
  memberId: string;
};

export type SocialImage = {
  image: string;
  socialId: string;
};

export type BandImage = {
  image: string;
  bandId: string;
};

export type ImageUploadBand = {
  _id: string;
  about: string;
  image: string;
  setImageModalState: (boolean) => void;
};

export type LoginValueTypes = {
  username: string;
  password: string;
};

export type AddNewMember = {
  id: string;
  name: string;
  instrument: string;
  orbitLength: number | string;
  color: string;
  biography: string;
};

export type AddNewSocial = {
  id: string;
  name: string;
  url: string;
};

export type EditBandTypes = {
  about: string;
  id: string;
  name: string;
  url: string;
};

export type EditBand = {
  id: string;
  about: string;
};

type EditPhotoTypes = {
  className: string;
  onClick: () => void;
};
