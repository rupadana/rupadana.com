import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Bookmark from "@/modules/bookmark/Bookmark";

const HEADING_TITLE = "Bookmarks"
const HEADING_DESCRIPTION = "Sharing my Inspiration notes"

export default function BookmarkPage() {
    return <>
        <Container data-aos="fade-up">
            <PageHeading title={HEADING_TITLE} description={HEADING_DESCRIPTION} />
            <Bookmark></Bookmark>
        </Container>

    </>
}