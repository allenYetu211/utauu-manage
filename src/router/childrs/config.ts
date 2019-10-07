export const config = [
	{
		value: '首页',
		icon: 'iconshouye',
		resourceKey: 'dashboard',
		always: true,
		components: 'Dashboard',
	},
	{
		value: '组织管理',
		icon: 'iconzuzhiguanli',
		resourceKey: 'organizationManage',
		id: '9',
		children: [
			{
				value: '终端管理',
				id: '1',
				resourceKey: 'deviceManage',
				components: 'ClientManage',
			},
			{
				value: '教师管理',
				id: '3',
				resourceKey: 'teacherManage',
				components: 'Teacher',
			},
			{
				value: '学生管理',
				id: '2',
				resourceKey: 'studentManage',
				components: 'Student',
			},
			{
				value: '组织架构',
				id: '4',
				resourceKey: 'organizationChart',
				components: 'Structure',
			},
			{
				value: '可见规则',
				id: '5',
				resourceKey: 'visibilityRules',
				components: 'visibilityRules',
			},
			{
				value: '角色管理',
				id: '6',
				resourceKey: 'roleManage',
				components: 'RoleManage',
			},
			// {
			//   value: "主题测试",
			//   components: "theme",
			// },
		],
	},
];
