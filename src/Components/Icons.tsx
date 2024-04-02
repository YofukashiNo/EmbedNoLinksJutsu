export const link = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      d="M9 7a1 1 0 0 1 .117 1.993L9 9H7a3 3 0 0 0-.176 5.995L7 15h2a1 1 0 0 1 .117 1.993L9 17H7a5 5 0 0 1-.217-9.995L7 7h2Zm8 0a5 5 0 0 1 .217 9.995L17 17h-2a1 1 0 0 1-.117-1.993L15 15h2a3 3 0 0 0 .176-5.995L17 9h-2a1 1 0 0 1-.117-1.993L15 7h2ZM7 11h10a1 1 0 0 1 .117 1.993L17 13H7a1 1 0 0 1-.117-1.993L7 11h10H7Z"
      fill="currentColor"
    />
    {children}
  </svg>
);

export const linkDismiss = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      d="M9 5a1 1 0 0 1 .117 1.993L9 7H7a3 3 0 0 0-.176 5.995L7 13h2a1 1 0 0 1 .117 1.993L9 15H7a5 5 0 0 1-.217-9.995L7 5h2Zm8 0a5 5 0 0 1 4.43 7.322 6.483 6.483 0 0 0-1.76-.951 3 3 0 0 0-2.493-4.366L17 7h-2a1 1 0 0 1-.117-1.993L15 5h2ZM7 9h10a1 1 0 0 1 .117 1.993L17 11H7a1 1 0 0 1-.117-1.993L7 9Zm16 8.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793l-1.646-1.647Z"
      fill="currentColor"
    />
    {children}
  </svg>
);
export default { link, linkDismiss };
