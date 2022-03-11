interface pagination {
 total: number
 perPage: string
 page: number
}

interface datas {
  messages: string
  datas: any[]
}

export interface propIn {
 pagination: pagination
 Head: any[]
 datas: datas
 pageChange: any
 perPageChange: any
}

// export {propIn}