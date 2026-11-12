export interface TimelineYear {
	year: string;
	events: { name: string; desc?: string }[];
}

export const timeline: TimelineYear[] = [
	{
		year: '2022',
		events: [
			{
				name: 'Climbing the ladder 🪜',
				desc: 'I was promoted to Manager and Lead Frontend Developer @ ROKiT. My responsibilities now included the day to day management of most web projects. This spanned from maintenance of live projects to platform design and development of new upcoming projects.'
			},
			{
				name: 'Health Update 🍎',
				desc: 'I successfully lost over 25kgs in a year and a half. This was a huge achievement as it gave me confidence that consistent steps can lead to huge outcomes!'
			}
		]
	},
	{
		year: '2021',
		events: [
			{
				name: 'New opportunities ✨',
				desc: 'I joined as a Frontend Developer @ ROKiT, USA. Completely remote due to the pandemic. I got to work with teams from all across the world ranging from Europe to the Americas. Worked on numerous projects in-house and for the world to see.'
			}
		]
	},
	{
		year: '2020',
		events: [
			{
				name: 'Into the unknown 📦',
				desc: 'I joined as a Frontend Intern at Decision Tree Analytics. Learning team dynamics and meeting project deadlines. My first job as a graduate.'
			},
			{
				name: 'Finishing my Bachelors 🎓',
				desc: 'Graduated from college! A wonderful four year adventure comes to a close. Eager to continue growing with the knowledge in hand.'
			}
		]
	},
	{
		year: '2019',
		events: [
			{
				name: 'First Job 💻',
				desc: 'I interned as as Software Programmer during my 3rd year of college. This was my first ever full paid job!'
			}
		]
	},
	{
		year: '2016',
		events: [
			{
				name: 'First steps into the tech world 👨‍💻',
				desc: 'After completing school, I joined Bennet University as a Computer Science student, starting my tech journey. So much to learn!'
			}
		]
	},
	{ year: '2014', events: [{ name: 'Began my schooling in higher secondary 🎒' }] }
];
