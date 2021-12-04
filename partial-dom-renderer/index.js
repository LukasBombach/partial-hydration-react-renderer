const Reconciler = require("react-reconciler");

const hostConfig = {
  supportsMutation: true,
  supportsPersistence: false,
  noTimeout: -1,
  isPrimaryRenderer: true,
  supportsHydration: false,
  createInstance(type, props, rootContainer, hostContext, internalHandle) {
    // eslint-disable-next-line no-console
    console.log("in createInstance");
    // eslint-disable-next-line no-console
    console.log({ type, props, rootContainer, hostContext, internalHandle });
    const element = document.createElement(type);
    if (props.className) element.className = props.className;
    if (props.id) element.id = props.id;
    return element;
  },
  createTextInstance(text, rootContainer, hostContext, internalHandle) {
    // eslint-disable-next-line no-console
    console.log("in createTextInstance");
    // eslint-disable-next-line no-console
    console.log({ text, rootContainer, hostContext, internalHandle });
    const textElement = document.createTextNode(text);
    return textElement;
  },
  appendInitialChild(parentInstance, child) {
    // eslint-disable-next-line no-console
    console.log("in appendInitialChild");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child });
    parentInstance.appendChild(child);
  },
  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
    // eslint-disable-next-line no-console
    console.log("in finalizeInitialChildren");
    // eslint-disable-next-line no-console
    console.log({ instance, type, props, rootContainer, hostContext });
    return false;
  },
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainer,
    hostContext
  ) {
    // eslint-disable-next-line no-console
    console.log("in prepareUpdate");
    // eslint-disable-next-line no-console
    console.log({
      instance,
      type,
      oldProps,
      newProps,
      rootContainer,
      hostContext,
    });
  },
  shouldSetTextContent(type, props) {
    // eslint-disable-next-line no-console
    console.log("in shouldSetTextContent");
    // eslint-disable-next-line no-console
    console.log({ type, props });
    return false;
  },
  getRootHostContext(rootContainer) {
    // eslint-disable-next-line no-console
    console.log("in getRootHostContext");
    // eslint-disable-next-line no-console
    console.log({ rootContainer });
    return null;
  },
  getChildHostContext(parentHostContext, type, rootContainer) {
    // eslint-disable-next-line no-console
    console.log("in getChildHostContext");
    // eslint-disable-next-line no-console
    console.log({ parentHostContext, type, rootContainer });
    return null;
  },
  getPublicInstance(instance) {
    // eslint-disable-next-line no-console
    console.log("in getPublicInstance");
    // eslint-disable-next-line no-console
    console.log({ instance });
    return null;
  },
  prepareForCommit(containerInfo) {
    // eslint-disable-next-line no-console
    console.log("in prepareForCommit");
    // eslint-disable-next-line no-console
    console.log({ containerInfo });
    return null;
  },
  resetAfterCommit(containerInfo) {
    // eslint-disable-next-line no-console
    console.log("in resetAfterCommit");
    // eslint-disable-next-line no-console
    console.log({ containerInfo });
  },
  preparePortalMount(containerInfo) {
    // eslint-disable-next-line no-console
    console.log("in preparePortalMount");
    // eslint-disable-next-line no-console
    console.log({ containerInfo });
  },
  now() {
    // eslint-disable-next-line no-console
    console.log("in now");
    return 0;
  },
  scheduleTimeout(
    // eslint-disable-next-line no-unused-vars
    fn,
    delay
  ) {
    // eslint-disable-next-line no-console
    console.log("in scheduleTimeout");
    // eslint-disable-next-line no-console
    console.log({ fn, delay });
  },
  cancelTimeout(id) {
    // eslint-disable-next-line no-console
    console.log("in cancelTimeout");
    // eslint-disable-next-line no-console
    console.log({ id });
  },
  appendChild(parentInstance, child) {
    // eslint-disable-next-line no-console
    console.log("in appendChild");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child });
    parentInstance.appendChild(child);
  },
  appendChildToContainer(container, child) {
    // eslint-disable-next-line no-console
    console.log("in appendChildToContainer");
    // eslint-disable-next-line no-console
    console.log({ container, child });
    container.appendChild(child);
  },
  insertBefore(parentInstance, child, beforeChild) {
    // eslint-disable-next-line no-console
    console.log("in insertBefore");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child, beforeChild });
  },
  insertInContainerBefore(container, child, beforeChild) {
    // eslint-disable-next-line no-console
    console.log("in insertInContainerBefore");
    // eslint-disable-next-line no-console
    console.log({ container, child, beforeChild });
  },
  removeChild(parentInstance, child) {
    // eslint-disable-next-line no-console
    console.log("in removeChild");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child });
  },
  removeChildFromContainer(container, child) {
    // eslint-disable-next-line no-console
    console.log("in removeChildFromContainer");
    // eslint-disable-next-line no-console
    console.log({ container, child });
  },
  resetTextContent(instance) {
    // eslint-disable-next-line no-console
    console.log("in resetTextContent");
    // eslint-disable-next-line no-console
    console.log({ instance });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    // eslint-disable-next-line no-console
    console.log("in commitTextUpdate");
    // eslint-disable-next-line no-console
    console.log({ textInstance, oldText, newText });
  },
  commitMount(instance, type, props, internalInstanceHandle) {
    // eslint-disable-next-line no-console
    console.log("in commitMount");
    // eslint-disable-next-line no-console
    console.log({ instance, type, props, internalInstanceHandle });
  },
  commitUpdate(
    instance,
    updatePayload,
    type,
    prevProps,
    nextProps,
    internalHandle
  ) {
    // eslint-disable-next-line no-console
    console.log("in commitUpdate");
    // eslint-disable-next-line no-console
    console.log({
      instance,
      updatePayload,
      type,
      prevProps,
      nextProps,
      internalHandle,
    });
  },
  hideInstance(instance) {
    // eslint-disable-next-line no-console
    console.log("in hideInstance");
    // eslint-disable-next-line no-console
    console.log({ instance });
  },
  hideTextInstance(textInstance) {
    // eslint-disable-next-line no-console
    console.log("in hideTextInstance");
    // eslint-disable-next-line no-console
    console.log({ textInstance });
  },
  unhideInstance(instance, props) {
    // eslint-disable-next-line no-console
    console.log("in unhideInstance");
    // eslint-disable-next-line no-console
    console.log({ instance, props });
  },
  unhideTextInstance(textInstance, text) {
    // eslint-disable-next-line no-console
    console.log("in unhideTextInstance");
    // eslint-disable-next-line no-console
    console.log({ textInstance, text });
  },
  clearContainer(container) {
    // eslint-disable-next-line no-console
    console.log("in clearContainer");
    // eslint-disable-next-line no-console
    console.log({ container });
  },
};
const reconciler = Reconciler(hostConfig);

const PartialDOMRenderer = {
  render(component, container) {
    const root = reconciler.createContainer(container, 0, false, null);
    reconciler.updateContainer(component, root, null);
  },
  hydrate(component, container) {
    const root = reconciler.createContainer(container, 0, false, null);
    reconciler.updateContainer(component, root, null);
  },
  createPortal() {},
  findDOMNode() {},
  unmountComponentAtNode() {},
};

module.exports = PartialDOMRenderer;
