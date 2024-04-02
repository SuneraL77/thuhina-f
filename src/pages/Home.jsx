import React from 'react'
import Hero from '../components/home/Hero'
import { Button, Checkbox, Drawer, Group, Pagination, Radio, Select } from '@mantine/core'
import { Accordion } from '@mantine/core';
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import Card from '../components/cards/Card';
import NormalCard from '../components/cards/NormalCard';
import { useDisclosure } from '@mantine/hooks';

const Home = () => {

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className='flex flex-col gap-10 pb-10'>
      <div className='hidden md:flex'>
        <Hero />
      </div>

      <div className='flex flex-col gap-10 px-3 pt-10 md:px-10 lg:px-16 xl:px-24 md:pt-0' name="mainAddvertisement">

        <div className='flex-col hidden gap-10 md:flex'>
          <div className='grid lg:grid-cols-4 md:gap-5 bg-[#ececec] p-3 rounded-md md:grid-cols-3 grid-cols-1 shadow-md'>

            {/* Sort By */}
            <div>
              <Select
                label={<span className='text-[#D5BD81]'>Sort By</span>}
                placeholder="Select"
                data={['React', 'Angular', 'Vue', 'Svelte']}
              />
            </div>

            {/* Are you looking for? */}
            <div className='flex flex-col gap-3'>
              <span className=''>Are you looking for?</span>
              <div className='flex justify-center w-full gap-6'>

                <Radio.Group
                  withAsterisk
                  className='flex'
                >
                  <Group mt="xs">
                    <Radio value="male" label={<FaFemale size={25} />} />
                    <Radio value="female" label={<FaMale size={25} />} />
                  </Group>
                </Radio.Group>

              </div>
            </div>

            {/* Age */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='age' >
                  <Accordion.Control>Age</Accordion.Control>
                  <Accordion.Panel>
                    <div className='grid grid-cols-3 gap-3 text-center'>
                      <Select
                        defaultValue='20'
                        data={['0', '10', '20', '30']}

                      />
                      <span>To</span>
                      <Select
                        defaultValue='30'
                        data={['0', '10', '20', '30']}
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Country of Residence */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='country' >
                  <Accordion.Control>Country of Residence</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Sri Lanka"
                      />
                      <Checkbox
                        label="India"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Region / District */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Region' >
                  <Accordion.Control>Region / District</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Kalutara"
                      />
                      <Checkbox
                        label="Colombo"
                      />
                      <Checkbox
                        label="Gampaha"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Ethnicity */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Ethnicity' >
                  <Accordion.Control>Ethnicity</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Sinhalese"
                      />
                      <Checkbox
                        label="Tamil"
                      />
                      <Checkbox
                        label="Muslim"
                      />
                      <Checkbox
                        label="Burger"
                      />
                      <Checkbox
                        label="Other"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Religion */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Religion' >
                  <Accordion.Control>Religion</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Buddhist"
                      />
                      <Checkbox
                        label="Cristian"
                      />
                      <Checkbox
                        label="Hindu"
                      />
                      <Checkbox
                        label="Islam"
                      />
                      <Checkbox
                        label="Other"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Civil Status */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Civil_Status' >
                  <Accordion.Control>Civil Status</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Never Married"
                      />
                      <Checkbox
                        label="Divorced"
                      />
                      <Checkbox
                        label="Widowed"
                      />
                      <Checkbox
                        label="Seperated"
                      />
                      <Checkbox
                        label="Other"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Profession */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Profession' >
                  <Accordion.Control>Profession</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Doctor"
                      />
                      <Checkbox
                        label="Engineer"
                      />
                      <Checkbox
                        label="Pilot"
                      />
                      <Checkbox
                        label="Accounter"
                      />
                      <Checkbox
                        label="Driver"
                      />
                      <Checkbox
                        label="Chef"
                      />
                      <Checkbox
                        label="Other"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Differently Abled */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Differently_Abled' >
                  <Accordion.Control>Differently Abled</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Yes"
                      />
                      <Checkbox
                        label="No"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Account Created by */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Account_Created_by' >
                  <Accordion.Control>Account Created by</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Self"
                      />
                      <Checkbox
                        label="Parents / Family / Friend"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Food Preference */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Food_Preference' >
                  <Accordion.Control>Food Preference</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Non Vegetarian"
                      />
                      <Checkbox
                        label="Vegetarian"
                      />
                      <Checkbox
                        label="Vegan"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Drinking */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Drinking' >
                  <Accordion.Control>Drinking</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Yes"
                      />
                      <Checkbox
                        label="No"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* ID Verified */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='ID_Verified' >
                  <Accordion.Control>ID Verified</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Yes"
                      />
                      <Checkbox
                        label="No"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Mother Tongue */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Mother_Tongue' >
                  <Accordion.Control>Mother Tongue</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Checkbox
                        label="Sinhala"
                      />
                      <Checkbox
                        label="Tamil"
                      />
                      <Checkbox
                        label="Arabic"
                      />
                      <Checkbox
                        label="English"
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Education_Level */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Education_Level' >
                  <Accordion.Control>Min Education Level</Accordion.Control>
                  <Accordion.Panel>
                    <div className='flex flex-col gap-2'>
                      <Select
                        placeholder="Select"
                        data={['GCE O/L', 'GCE A/L', 'Undergraduate', 'Graduate']}
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Height */}
            <div>
              <Accordion chevronPosition="left" variant="filled">
                <Accordion.Item value='Height' >
                  <Accordion.Control>Height</Accordion.Control>
                  <Accordion.Panel>
                    <div className='grid grid-cols-3 gap-3 text-center'>
                      <Select
                        defaultValue='20'
                        data={['3ft', '3.5ft', '4ft', '4.5ft']}

                      />
                      <span>To</span>
                      <Select
                        defaultValue='30'
                        data={['3ft', '3.5ft', '4ft', '4.5ft']}
                      />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className='flex justify-end mt-5 md:mt-0 md:justify-start'>
              <Button variant='filled' color='#D5BD81'>Reset</Button>
            </div>

          </div>

          <div className='flex justify-end'>
            <Button variant='filled' color='#D5BD81'>Save this Criteria</Button>
          </div>
        </div>

        <div className='flex justify-start md:hidden'>
          <Button variant='filled' color='#D5BD81' onClick={open}>Search</Button>
        </div>

        <Drawer
          opened={opened}
          onClose={close}
          title='Search'
          size="90%"
          position="right">
          <div className='flex flex-col gap-10'>
            <div className='grid lg:grid-cols-4 md:gap-5 bg-[#ececec] p-3 rounded-md md:grid-cols-3 grid-cols-1 shadow-md'>

              {/* Sort By */}
              <div>
                <Select
                  label={<span className='text-[#D5BD81]'>Sort By</span>}
                  placeholder="Select"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                />
              </div>

              {/* Are you looking for? */}
              <div className='flex flex-col gap-3'>
                <span className=''>Are you looking for?</span>
                <div className='flex justify-center w-full gap-6'>

                  <Radio.Group
                    withAsterisk
                    className='flex'
                  >
                    <Group mt="xs">
                      <Radio value="male" label={<FaFemale size={25} />} />
                      <Radio value="female" label={<FaMale size={25} />} />
                    </Group>
                  </Radio.Group>

                </div>
              </div>

              {/* Age */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='age' >
                    <Accordion.Control>Age</Accordion.Control>
                    <Accordion.Panel>
                      <div className='grid grid-cols-3 gap-3 text-center'>
                        <Select
                          defaultValue='20'
                          data={['0', '10', '20', '30']}

                        />
                        <span>To</span>
                        <Select
                          defaultValue='30'
                          data={['0', '10', '20', '30']}
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Country of Residence */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='country' >
                    <Accordion.Control>Country of Residence</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Sri Lanka"
                        />
                        <Checkbox
                          label="India"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Region / District */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Region' >
                    <Accordion.Control>Region / District</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Kalutara"
                        />
                        <Checkbox
                          label="Colombo"
                        />
                        <Checkbox
                          label="Gampaha"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Ethnicity */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Ethnicity' >
                    <Accordion.Control>Ethnicity</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Sinhalese"
                        />
                        <Checkbox
                          label="Tamil"
                        />
                        <Checkbox
                          label="Muslim"
                        />
                        <Checkbox
                          label="Burger"
                        />
                        <Checkbox
                          label="Other"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Religion */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Religion' >
                    <Accordion.Control>Religion</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Buddhist"
                        />
                        <Checkbox
                          label="Cristian"
                        />
                        <Checkbox
                          label="Hindu"
                        />
                        <Checkbox
                          label="Islam"
                        />
                        <Checkbox
                          label="Other"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Civil Status */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Civil_Status' >
                    <Accordion.Control>Civil Status</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Never Married"
                        />
                        <Checkbox
                          label="Divorced"
                        />
                        <Checkbox
                          label="Widowed"
                        />
                        <Checkbox
                          label="Seperated"
                        />
                        <Checkbox
                          label="Other"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Profession */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Profession' >
                    <Accordion.Control>Profession</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Doctor"
                        />
                        <Checkbox
                          label="Engineer"
                        />
                        <Checkbox
                          label="Pilot"
                        />
                        <Checkbox
                          label="Accounter"
                        />
                        <Checkbox
                          label="Driver"
                        />
                        <Checkbox
                          label="Chef"
                        />
                        <Checkbox
                          label="Other"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Differently Abled */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Differently_Abled' >
                    <Accordion.Control>Differently Abled</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Yes"
                        />
                        <Checkbox
                          label="No"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Account Created by */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Account_Created_by' >
                    <Accordion.Control>Account Created by</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Self"
                        />
                        <Checkbox
                          label="Parents / Family / Friend"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Food Preference */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Food_Preference' >
                    <Accordion.Control>Food Preference</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Non Vegetarian"
                        />
                        <Checkbox
                          label="Vegetarian"
                        />
                        <Checkbox
                          label="Vegan"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Drinking */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Drinking' >
                    <Accordion.Control>Drinking</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Yes"
                        />
                        <Checkbox
                          label="No"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* ID Verified */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='ID_Verified' >
                    <Accordion.Control>ID Verified</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Yes"
                        />
                        <Checkbox
                          label="No"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Mother Tongue */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Mother_Tongue' >
                    <Accordion.Control>Mother Tongue</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Checkbox
                          label="Sinhala"
                        />
                        <Checkbox
                          label="Tamil"
                        />
                        <Checkbox
                          label="Arabic"
                        />
                        <Checkbox
                          label="English"
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Education_Level */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Education_Level' >
                    <Accordion.Control>Min Education Level</Accordion.Control>
                    <Accordion.Panel>
                      <div className='flex flex-col gap-2'>
                        <Select
                          placeholder="Select"
                          data={['GCE O/L', 'GCE A/L', 'Undergraduate', 'Graduate']}
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Height */}
              <div>
                <Accordion chevronPosition="left" variant="filled">
                  <Accordion.Item value='Height' >
                    <Accordion.Control>Height</Accordion.Control>
                    <Accordion.Panel>
                      <div className='grid grid-cols-3 gap-3 text-center'>
                        <Select
                          defaultValue='20'
                          data={['3ft', '3.5ft', '4ft', '4.5ft']}

                        />
                        <span>To</span>
                        <Select
                          defaultValue='30'
                          data={['3ft', '3.5ft', '4ft', '4.5ft']}
                        />
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className='flex justify-end mt-5 md:mt-0 md:justify-start'>
                <Button variant='filled' color='#D5BD81'>Reset</Button>
              </div>

            </div>

            <div className='flex justify-end'>
              <Button variant='filled' color='#D5BD81'>Save this Criteria</Button>
            </div>
          </div>
        </Drawer>

        <div className='flex flex-col gap-10'>
          <Card />
          <NormalCard />
          <NormalCard />
          <NormalCard />
        </div>

        <div className='flex justify-center'>
          <Pagination total={10} />
        </div>
      </div>

    </div>
  )
}

export default Home
