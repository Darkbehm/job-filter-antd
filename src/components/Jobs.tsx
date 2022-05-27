
import JobCard from './JobCard';
import data from '../data/data.json';

import { List } from 'antd'
import { useAppSelector } from '../hooks';


type job = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: Array<string>,
  tools: Array<string>
}


export const Jobs = (): JSX.Element => {
  const filtersArray: string[] = useAppSelector((state) => state.filters);

  const filteredJobs: Array<job> = data.filter((job): boolean => {
    const filters = [job.role, job.level, ...job.languages, ...job.tools];
    return filtersArray.every((filter): boolean => {
      return filters.includes(filter);
    });
  });

  return (
    <List
      dataSource={filteredJobs}
      renderItem={item => (
        <JobCard job={item} />
      )}
    />
  )
}
