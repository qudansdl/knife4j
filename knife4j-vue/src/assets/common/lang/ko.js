const langOptions = {
  lang: 'ko',
  title: '제목',
  searchHolderText: '키워드를 입력하세요',
  docLinkTip: '문서',
  langText: 'KO',
  settingText: '설정',
  cacheText: '캐시 삭제',
  //Properties for individual tables in the document
  table: {
    //SwaggerModels
    swaggerModelsColumns: [
      {
        title: '이름',
        dataIndex: 'name',
        width: '30%'
      },
      {
        title: '유형',
        dataIndex: 'type',
        width: '15%'
      },
      {
        title: '설명',
        width: '35%',
        dataIndex: 'description',
        scopedSlots: { customRender: 'descriptionValueTemplate' }
      },
      {
        title: '스키마',
        dataIndex: 'schemaValue',
        width: '15%'
      }
    ],
    //Documentation - Request parameters
    documentRequestColumns: [
      {
        title: '이름',
        dataIndex: 'name',
        width: '30%'
      },
      {
        title: '설명',
        dataIndex: 'description',
        width: '25%',
        scopedSlots: { customRender: 'descriptionValueTemplate' }
      },
      {
        title: 'in',
        dataIndex: 'in',
        scopedSlots: { customRender: 'typeTemplate' }
      },
      {
        title: '필수',
        dataIndex: 'require',
        scopedSlots: { customRender: 'requireTemplate' }
      },
      {
        title: '유형',
        dataIndex: 'type',
        scopedSlots: { customRender: 'datatypeTemplate' }
      },
      {
        title: '스키마',
        dataIndex: 'schemaValue',
        width: '15%'
      }
    ],
    //Document Description - Response Status
    documentResponseStatusColumns: [
      {
        title: '코드',
        dataIndex: 'code',
        width: '20%'
      },
      {
        title: '설명',
        dataIndex: 'description',
        width: '55%',
        scopedSlots: { customRender: 'descriptionTemplate' }
      },
      {
        title: '스키마',
        dataIndex: 'schema',
        scopedSlots: { customRender: 'schemaTemplate' }
      }
    ],
    //Document Description - Response Header
    documentResponseHeaderColumns: [
      {
        title: '이름',
        dataIndex: 'name',
        width: '30%'
      },
      {
        title: '설명',
        dataIndex: 'description',
        width: '55%'
      },
      {
        title: '유형',
        dataIndex: 'type'
      }
    ],
    //Document description - Response parameters
    documentResponseColumns: [
      {
        title: '이름',
        dataIndex: 'name',
        width: '35%'
      },
      {
        title: '설명',
        dataIndex: 'description',
        scopedSlots: { customRender: 'descriptionTemplate' },
        width: '40%'
      },
      {
        title: '유형',
        dataIndex: 'type'
      },
      {
        title: '스키마',
        dataIndex: 'schemaValue',
        width: '15%'
      }
    ],
    //Debug - Request header parameters
    debugRequestHeaderColumns: [
      {
        title: '이름',
        dataIndex: 'name',
        width: '20%',
        scopedSlots: {
          customRender: 'headerName'
        }
      },
      {
        title: '값',
        dataIndex: 'content',
        scopedSlots: {
          customRender: 'headerValue'
        }
      },
      {
        title: '작업',
        dataIndex: 'operation',
        width: '10%',
        scopedSlots: {
          customRender: 'operation'
        }
      }
    ],
    //Debug-Form Data type request header
    debugFormDataRequestColumns: [
      {
        title: '이름',
        dataIndex: 'name',
        width: '20%',
        scopedSlots: {
          customRender: 'formName'
        }
      },
      {
        title: '유형',
        dataIndex: 'type',
        width: '12%',
        scopedSlots: {
          customRender: 'formType'
        }
      },
      {
        title: '값',
        dataIndex: 'content',
        scopedSlots: {
          customRender: 'formValue'
        }
      },
      {
        title: '작업',
        dataIndex: 'operation',
        width: '10%',
        scopedSlots: {
          customRender: 'operation'
        }
      }
    ],
    //The debug -url-form type requests parameter headers
    debugUrlFormRequestColumns: [
      {
        title: '이름',
        dataIndex: 'name',
        width: '20%',
        scopedSlots: {
          customRender: 'urlFormName'
        }
      },
      {
        title: '값',
        dataIndex: 'content',
        scopedSlots: {
          customRender: 'urlFormValue'
        }
      },
      {
        title: '설명',
        dataIndex: 'operation',
        width: '10%',
        scopedSlots: {
          customRender: 'operation'
        }
      }
    ],
    //Debug-Response Header
    debugResponseHeaderColumns: [
      {
        title: '이름',
        dataIndex: 'name',
        width: '20%'
      },
      {
        title: '값',
        dataIndex: 'value'
      }
    ],
    //Header in auth
    authHeaderColumns: [
      {
        title: '키',
        dataIndex: 'key',
        customRender(text, row, index) {
          return row.key + '(' + row.type + ')';
        }
      },
      {
        title: '이름',
        className: 'column-money',
        dataIndex: 'name'
      },
      {
        title: 'in',
        dataIndex: 'in'
      },
      {
        title: '값',
        dataIndex: 'value',
        scopedSlots: {
          customRender: 'paramIpt'
        }
      }
    ]
  },
  //主页显示
  homePage: {
    description: '설명',
    author: '작성자',
    version: '버전',
    host: '호스트',
    basePath: '기본 경로',
    serviceUrl: '서비스  URL',
    groupName: '그룹 이름',
    groupUrl: '그룹 URL',
    groupLocation: '그릅 위치',
    apiCountNumber: '인터페이스 통계'
  },
  markdown: {
    title: '다른 문서'
  },
  message: {
    success: 'Save successfully',
    settingTip: 'When personalization is enabled, close the interface tab or refresh the current pageAfter personalization is enabled, the interface tab tab needs to be closed and then reopened or the current page needs to be refreshed',
    settingHost: 'The host is enabled successfully. Please close the interface tab or refresh the current page to enable debuggingThe host is enabled successfully. Please close the interface tab or refresh the current page before debugging',
    unsupportstore: 'Current browsers do not support localStorage objects and cannot use this feature',
    copy: {
      url: {
        success: 'Copy address successfully',
        fail: 'Failed to copy the address, your current browser version is not compatible, please copy manually.'
      },
      method: {
        success: 'Copy Url successfully',
        fail: 'Failed to copy the url, your current browser version is not compatible, please copy manually.'
      },
      document: {
        success: 'Copy document successful',
        fail: 'Failed to copy the document, your current browser version is not compatible, please copy it manually.'
      },
      raw: {
        success: 'Copy raw successfully',
        fail: 'Failed to copy raw, your current browser version is not compatible, please copy manually.'
      },
      curl: {
        success: 'Copy curl successfully',
        fail: 'Copy curl failed, your current browser version is not compatible, please copy manually.'
      },
      open: {
        success: 'Copy OpenAPI successfully',
        fail: 'Copy OpenAPI failed, your current browser version is not compatible, please copy manually.'
      }
    },
    layer: {
      title: 'message',
      yes: 'Yes',
      no: 'No'
    },
    auth: {
      invalid: 'Invalid value',
      confirm: 'Are you sure you want to logout?',
      success: 'Logout Success'
    },
    global: {
      iptname: 'Please enter the global parameter name',
      iptvalue: 'Please enter the global parameter value',
      deleteSuccess: 'Delete Success'
    },
    settings: {
      plusFail: 'Knife4j enhancements cannot be turned on. Make sure that the annotation @EnableKnife4j is enabled on the back end',
      plusError: 'Unable to turn on Swagger BootstrapUi Enhancement, Error Cause:',
      success: 'Save successfully, please refresh the document page'
    },
    offline: {
      imple: 'This feature has not been implemented ...',
      markdown: 'Downloading Markdown file, please wait...',
      html: 'Downloading Html file, please wait...',
      word: 'Downloading Word file, please wait...',
      copy: 'Copy',
      toomany: 'The current number of interfaces exceeds the limit. Please use the third-party markdown conversion software for conversion to see the effect.',
      note: 'swagger-bootstrap-ui provides markdwon-formatted offline documents that developers can copy and convert to HTML or PDF through other markdown conversion tools..'
    },
    debug: {
      urlNotEmpty: 'Request URL address cannot be empty',
      fieldNotEmpty: 'cannot be empty',
      networkErr: 'The server is restarting or hanging up:(~~~~',
      contentToBig: 'The amount of interface response data exceeds the limit and is not displayed in the response content. Please check it in raw',
      contentToBigBlob: 'The amount of interface response data exceeds the limit and is not displayed in the response content.'
    },
    sys: {
      loadErr: 'Make sure the swagger resource interface is correct.'
    }
  },
  home: {
    des: 'Description',
    author: 'Author',
    version: 'Version',
    serviceUrl: 'serviceUrl',
    groupName: 'Group Name',
    groupUrl: 'Group url',
    groupLocation: 'Group Location',
    apiCount: 'Api Counts',
    searchText: 'Search...'
  },
  swaggerModel: {
    nodata: 'No Swagger Models',
    tableHeader: {
      name: 'name',
      des: 'description',
      type: 'type'
    }
  },
  global: {
    tab: 'Global Parameter Settings',
    add: 'Add',
    model: 'Add Parameter',
    tableHeader: [{
      title: '이름',
      dataIndex: 'name',
      width: '15%',
      scopedSlots: {
        customRender: 'name'
      }
    },
    {
      title: '값',
      className: 'column-money',
      dataIndex: 'value',
      width: '65%',
      scopedSlots: {
        customRender: 'paramContentLabel'
      }
    },
    {
      title: 'type',
      dataIndex: 'in',
      width: '10%',
      scopedSlots: {
        customRender: 'paramTypeLable'
      }
    },
    {
      title: '설명',
      dataIndex: 'operation',
      scopedSlots: {
        customRender: 'operation'
      }
    }
    ],
    form: {
      name: 'name',
      value: 'value',
      type: 'type',
      validate: {
        name: 'Please enter the parameter name',
        value: 'Please enter the parameter value'
      }
    },
    ok: 'ok',
    cancel: 'cancel',
    save: 'Save',
    delete: 'Delete',
    note: 'Knife4j Provide global parameter Debug function, currently default to provide header (request header), query (form) two ways of entry.<br /><br />After adding the global parameter here, the default Debug debug tab page will take this parameter.'

  },
  settings: {
    title: 'Personalized Settings',
    openCache: 'Enable request parameter cache',
    dynamicParameter: 'Enable dynamic request parameters',
    showApi: 'Enable Menu Api Address Display',
    tagDes: 'Enable Grouping tag displays dsecription description properties',
    apiFilter: 'Open RequestMapping Interface Filtering,Default',
    openCacheApi: 'Enable Open cached open API documents',
    plus: 'Enabling enhancements provided by Knife4j',
    save: 'Save',
    copy: 'copy',
    fastTitle: '<h5>Copy the following address through <kbd>ctrl + c</kbd> to open the browser'
  },
  auth: {
    cancel: 'Logout',
    save: 'Save',
    tableHeader: {
      key: 'key',
      name: 'name',
      in: 'in',
      value: 'value',
      operator: 'operate'
    },
    valueInvalid: 'Invalid Value'
  },
  menu: {
    home: 'Home',
    manager: 'DocumentHelper',
    globalsettings: 'GlobalParams',
    officeline: 'OfflineDocument',
    selfSettings: 'Settings',
    other: 'Others',
    menuItemList: [
      { key: '1', icon: 'caret-left', text: 'Close Left' },
      { key: '2', icon: 'caret-right', text: 'Close Right' },
      { key: '3', icon: 'close-circle', text: 'Close Other' }
    ]
  },
  doc: {
    title: 'Doc',
    note: 'Description',
    copy: 'Copy',
    copyHash: 'Copy Address',
    copyMethod: 'Copy Url',
    produces: 'produces',
    consumes: 'consumes',
    author: 'Developer',
    url: 'url',
    method: 'method',
    des: 'Note',
    params: 'Params',
    example: 'example',
    enumAvalible: 'Avalible',
    requestExample: 'Example',
    paramsHeader: {
      name: 'name',
      des: 'description',
      require: 'require',
      type: 'data type',
      requestType: 'request type'

    },
    responseHeaderParams: 'Response Header',
    response: 'Status',
    responseHeader: {
      code: 'code',
      des: 'description'
    },
    responseParams: 'Response Params',
    responseParamsHeader: {
      name: 'name',
      des: 'description',
      type: 'type'
    },
    responseExample: 'Response Example',
    nodata: 'No data'

  },
  offline: {
    des: 'Knife4j provides export of offline documents in 4 formats (Html/Markdown/Word/OpenAPI)',
    download: {
      markdown: 'Markdown',
      html: 'Html',
      word: 'Word',
      pdf: 'Pdf'
    },
    contact: 'Contact',
    url: 'api url',
    note: 'Description',
    schemaDes: 'schema Description'
  },
  debug: {
    title: 'Debug',
    send: 'Send',
    headers: 'Headers',
    params: 'Params',
    form: {
      upload: 'Upload',
      itemText: 'text',
      itemFile: 'file'
    },
    tableHeader: {
      holderName: 'Name',
      holderValue: 'Value',
      holderDel: 'Delete',
      selectAll: 'Select All',
      type: 'type',
      name: 'name',
      value: 'value'
    },
    response: {
      content: 'Response',
      showDes: 'Show Description',
      code: 'code:',
      cost: 'cost:',
      size: 'size:',
      header: 'Request Header',
      download: 'Download File',
      copy: 'copy'
    }

  },
  open: {
    copy: ' Copy ',
    download: ' Download '
  },
  tab: {
    closeCurrent: 'Close Current Tab',
    closeOther: 'Close Other Tab',
    closeAll: 'Close All Tab'
  },
  validate: {
    header: 'Request Header ',
    notEmpty: ' cannot be empty',
    fileNotEmpty: ' file cannot be empty'
  },
  script: {
    JSExample: 'JSExample',
    TSExample: 'TSExample',
  }
};


export default langOptions;
