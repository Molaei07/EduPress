export const CrumbList = [{ id: 1, name: "Home", path: "/" }];

export function removeCrumb(id) {
  if (CrumbList.length !== id) {
    CrumbList.splice(id);
  }
}

export function addCrumb(crumb, crumbName) {
  const Exist = CrumbList.find(item => item.name === crumbName);
  if (!Exist) {
    CrumbList.push({ id: CrumbList.length + 1, name: crumbName, path: crumb })
  }
}
