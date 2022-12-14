import { createSelector } from "reselect";

const selectRaw = (state) => state.evenement.list;

const selectLoading = createSelector([selectRaw], (raw) => raw.loading);
const selectLoadingPasse = createSelector(
  [selectRaw],
  (raw) => raw.loadingpasse
);
const selectRowsPasse = createSelector(
  [selectRaw],
  (raw) => raw.evenementpasse
);

const selectRowsVenir = createSelector(
  [selectRaw],
  (raw) => raw.evenementvenir
);

const selectLoadingVenir = createSelector(
  [selectRaw],
  (raw) => raw.loadingvenir
);

const selectExportLoading = createSelector(
  [selectRaw],
  (raw) => raw.exportLoading
);

const selectRows = createSelector([selectRaw], (raw) => raw.rows);

const selectCount = createSelector([selectRaw], (raw) => raw.count);

const selectHasRows = createSelector([selectCount], (count) => count > 0);

const selectOrderBy = createSelector([selectRaw], (raw) => {
  const sorter = raw.sorter;

  if (!sorter) {
    return null;
  }

  if (!sorter.field) {
    return null;
  }

  let direction = sorter.order === "descend" ? "DESC" : "ASC";

  return `${sorter.field}_${direction}`;
});

const selectFilter = createSelector([selectRaw], (raw) => {
  return raw.filter;
});

const selectRawFilter = createSelector([selectRaw], (raw) => {
  return raw.rawFilter;
});

const selectLimit = createSelector([selectRaw], (raw) => {
  const pagination = raw.pagination;
  return pagination.pageSize;
});

const selectOffset = createSelector([selectRaw], (raw) => {
  const pagination = raw.pagination;

  if (!pagination || !pagination.pageSize) {
    return 0;
  }

  const current = pagination.current || 1;

  return (current - 1) * pagination.pageSize;
});

const selectPagination = createSelector(
  [selectRaw, selectCount],
  (raw, count) => {
    return {
      ...raw.pagination,
      total: count,
      showSizeChanger: true,
    };
  }
);

const selectSelectedKeys = createSelector([selectRaw], (raw) => {
  return raw.selectedKeys;
});

const selectSelectedRows = createSelector(
  [selectRaw, selectRows],
  (raw, rows) => {
    return rows.filter((row) => raw.selectedKeys.includes(row.id));
  }
);

const evenementListSelectors = {
  selectLoading,
  selectRows,
  selectCount,
  selectOrderBy,
  selectLimit,
  selectFilter,
  selectOffset,
  selectPagination,
  selectSelectedKeys,
  selectSelectedRows,
  selectHasRows,
  selectExportLoading,
  selectRawFilter,
  selectLoadingPasse,
  selectRowsPasse,
  selectRowsVenir,
  selectLoadingVenir,
};

export default evenementListSelectors;
