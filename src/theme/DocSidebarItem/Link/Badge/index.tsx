export default function DocSidebarItemLinkBadge({ badge }) {
  const { type, label } = badge;

  return <span className={`badge badge--${type} badge--sm`}>{label}</span>;
}
