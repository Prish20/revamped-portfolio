const Alert = ({ type, text }: { type: string; text: string }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800" : "bg-black"
        } flex items-center rounded-md p-5 leading-none text-indigo-100 lg:inline-flex lg:rounded-full`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-black"
          } mr-3 px-2 py-1 text-xs font-semibold uppercase`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
