import { albumorderConstants } from '../constants';

const initialState = {
  testmode: 1,
  access_key: "SCAPI0000001",
  secret_key: "xxxxxxxxxxxxxxxxxx",
  customer_id: 1,
  order_id: "shop00111",
  list:
  {
    path: "httpdocs\/ftp_test\/",
    filename: "test.pdf",
    easy: 0,
    nocover: 0,
    uracover: 0,
    page_size: 1,
    bind_type: 2,
    bind_direction: 1,
    paper_type: 4,
    text_color_type: 1,
    cover_paper_data: "101,2,1",
    cover_thick: 0,
    asobi: 0,
    nuritasi: 1,
    zenmen: 1,
    rot_num: 1,
  },
  haisou: 0,
  cre_adr: 0,
  pre_regist_addr: 0,
  zip01: '',
  zip02: '',
  pref: '',
  addr01: '',
  addr02: '',
  tel: '',
  name: '',
  email: ''
};

export function albumorder(state = initialState, action) {
  switch (action.type) {
    case albumorderConstants.ALBUMORDER_ZIP1:
      return {
        ...state,
        loading: false,
        zip01: action.payload,
      };
    case albumorderConstants.ALBUMORDER_ZIP2:
      return {
        ...state,
        loading: false,
        zip02: action.payload,
      };
    case albumorderConstants.ALBUMORDER_PREF:
      return {
        ...state,
        loading: false,
        pref: action.payload,
      };
    case albumorderConstants.ALBUMORDER_ADDR1:
      return {
        ...state,
        loading: false,
        addr01: action.payload,
      };
    case albumorderConstants.ALBUMORDER_ADDR2:
      return {
        ...state,
        loading: false,
        addr02: action.payload,
      };
    case albumorderConstants.ALBUMORDER_TEL:
      return {
        ...state,
        loading: false,
        tel: action.payload,
      };
    case albumorderConstants.ALBUMORDER_NAME:
      return {
        ...state,
        loading: false,
        name: action.payload,
      };
    case albumorderConstants.ALBUMORDER_EMAIL:
      return {
        ...state,
        loading: false,
        email: action.payload,
      };
    default:
      return state
  }
}
