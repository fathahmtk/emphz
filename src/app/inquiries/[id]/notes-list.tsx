
import { InquiryNote } from '@/lib/types';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type NotesListProps = {
    notes: InquiryNote[];
};

function getInitials(name: string) {
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}


export default function NotesList({ notes }: NotesListProps) {
    if (!notes || notes.length === 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Internal Notes</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">No notes have been added to this inquiry yet.</p>
                </CardContent>
            </Card>
        );
    }
    
    // Sort notes, newest first
    const sortedNotes = [...notes].sort((a, b) => {
        if (!a.createdAt) return 1;
        if (!b.createdAt) return -1;
        return b.createdAt.toMillis() - a.createdAt.toMillis();
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Internal Notes</CardTitle>
                 <CardDescription>{notes.length} note(s)</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-6">
                    {sortedNotes.map((note, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <Avatar className="h-9 w-9 border">
                                {/* Assuming user might have a photoURL, otherwise fallback */}
                                {/* <AvatarImage src={note.authorPhotoURL} /> */}
                                <AvatarFallback>{getInitials(note.author)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-sm">{note.author}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {note.createdAt?.toDate ? format(note.createdAt.toDate(), 'PP, p') : 'Just now'}
                                    </p>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{note.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
