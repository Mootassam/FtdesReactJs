import { create } from "lodash";
import { createSelector } from "reselect";

const selectRaw = (state) => state.publication.list;

const selectLoading = createSelector([selectRaw], (raw) => raw.loading);

const selectExportLoading = createSelector(
  [selectRaw],
  (raw) => raw.exportLoading
);

const selectPublicationByThematiqueRows = createSelector(
  [selectRaw],
  (raw) => raw.allbythematique
);

const loadingthematique = createSelector(
  [selectRaw],
  (raw) => raw.loadingthematique
);

const rowsThematique = createSelector([selectRaw], (raw) => raw.rowsThematique);

const slectByCategory = createSelector([selectRaw], (raw) => raw.allbyCategory);
const loadingByCategory = createSelector(
  [selectRaw],
  (raw) => raw.loadingByCategory
);
const selectloadingpublicationbythematique = createSelector(
  [selectRaw],
  (raw) => raw.loadingpublicationbythematique
);
const selectRows = createSelector([selectRaw], (raw) => raw.rows);

const selectCount = createSelector([selectRaw], (raw) => raw.count);

const selectHasRows = createSelector([selectRows], (count) => count.length > 0);

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

const publicationListSelectors = {
  loadingthematique,
  rowsThematique,
  selectPublicationByThematiqueRows,
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
  selectloadingpublicationbythematique,
  slectByCategory,
  loadingByCategory,
};

export default publicationListSelectors;
