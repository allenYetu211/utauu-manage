export interface IColumn {
	to: string;
	txt: string;
}

export interface IChilds {
	txt: string;
	column: IColumn[];
}

export interface IParentContainer {
	column?: IColumn;
	childs?: IChilds;
}
