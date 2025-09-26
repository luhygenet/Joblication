export default interface job {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}

export interface opportunityType {
  id: string;
  data: []
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  logoUrl: string;
}


export interface OpportunityResponse {
  success: boolean;
  message: string;
  data: opportunityType[];
  errors: any;
  count: number;
}

export interface SpecificOpportunityResponse {
  success: boolean;
  message: string;
  data: opportunityType;
  errors: any;
  count: number;
}