import React from 'react';
import {connect} from 'react-redux';
import {autobind} from 'core-decorators';
import {Link} from 'react-router';
import {Table, Button} from 'antd';
import {getAccounts} from '../../actions/accounts.action';
import field from './field';

const columns = [
  ...field,
  {
    title: '操作',
    key: 'operation',
    render(text, record) {
      return (
        <span>
          <Link className="edit-btn" to={`accounts/edit/${record.accountId}`}>编辑</Link>
        </span>
      );
    }
  }
];

@connect(state => (state.accounts))
class AccountsIndex extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    data: React.PropTypes.array.isRequired
  }

  state = {
    selectedRowKeys: [],
    loading: false,
    editRecord: {}
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.dispatch(getAccounts()).then(res => {});
  }

  @autobind()
  onSelectChange(selectedRowKeys) {
    this.setState({ selectedRowKeys });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          onRowClick={(record, index, e) => {
                  let target = e.target;
                  if (target.className === 'edit-btn') {}
               }}
          dataSource={this.props.data}
          rowKey={record => record.accountId} />
      </div>
    );
  }
}

export default AccountsIndex;
