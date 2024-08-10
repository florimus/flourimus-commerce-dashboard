const TextArea = ({ placeholder, error, ...rest }: any) => {
  return (
    <>
      <div
        className={`w-full border${error ? ' border-red-500' : ' border-gray-200'} rounded-lg bg-gray-50`}
      >
        <div className="px-4 py-2 bg-white rounded-t-lg">
          <textarea
            id="comment"
            rows={4}
            {...rest}
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
            placeholder={placeholder ?? 'Write a comment...'}
          />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default TextArea;
