const SectionHeader = ({ sectionName }: { sectionName: string }) => {
  return (
    <div>
      <h2 className="neue-regular text-2xl my-4 font-bold mt-8 text-white">
        {sectionName}
      </h2>
    </div>
  );
};

export default SectionHeader;
