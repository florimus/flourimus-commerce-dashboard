const TextArea = ({ placeholder, ...rest }: any) => {
  return (
    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <textarea
          id="comment"
          rows={4}
          {...rest}
          className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Write a comment..."
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
