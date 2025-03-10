const actualReactRouterDom = jest.requireActual("react-router-dom");

module.exports = {
  ...actualReactRouterDom, // Keep original features
  useNavigate: () => jest.fn(), // Mock useNavigate
  useParams: () => ({}), // Mock useParams
  Link: ({ children, ...props }) => <a {...props}>{children}</a>, // Mock Link
};
